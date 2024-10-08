import { NextApiHandler, NextApiRequest } from 'next'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs/promises'

export const config = {
  api: {
    bodyParser: false,
  },
}

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {}

  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/nfts')
    options.filename = (name, ext, _path) => {
      return _path.originalFilename || ''
    }
  }

  const form = formidable(options)
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      resolve({ fields, files })
    })
  })
}

const handler: NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + '/public', '/nfts'))
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + '/public', '/nfts'))
  }
  await readFile(req, true)
  res.json({ status: 200 })
}

export default handler
