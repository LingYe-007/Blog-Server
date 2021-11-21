import * as path from 'path'
import { IncomingMessage } from 'http'
import { Binary, ObjectId, Long } from 'mongodb'

import config from '../config'
import * as db from '../db'
import stats from '../stats'

export async function upload(req: IncomingMessage, name: string) {
  const extname = path.extname(name.toLowerCase()).replace(/^\./, '')
  if (config.uploadTypes.includes(extname) === false) {
    throw stats.ErrInvalidFileType
  }
  const chunks: Buffer[] = []
  let size = 0
  await new Promise((resolve, reject) => {
    req.on('data', chunk => {
      chunks.push(chunk)
      size += chunk.byteLength
      if (size > config.uploadSizeLimit) return reject(stats.ErrPayloadTooLarge)
    })
    req.on('end', resolve)
  })
  const result = await db.fileCollection.insertOne({
    name,
    data: new Binary(Buffer.concat(chunks)),
    size,
    createdAt: Long.fromNumber(Date.now())
  })
  return result.insertedId
}

export async function find(_id: string) {
  const result = await db.fileCollection.findOne({ _id: new ObjectId(_id) })
  if (!result) throw stats.ErrNotFound
  return result
}
