import { ObjectId } from 'mongodb'
import * as db from '../db'
import stats from '../stats'
import { IActicle } from '../types'

/**
 * @param acticle
 * @returns
 */
export async function add(acticle: IActicle) {
  const total = await db.acticleCollection.findOne(acticle)
  if (total !== undefined) throw stats.ErrNotFound
  acticle.pubulishTime = Date()
  const result = await db.acticleCollection.insertOne(acticle)
  return result
}

/**
 * @param query
 * @returns
 */
export async function update(query: IActicle) {
  query._id = new ObjectId(query._id)
  const total = await db.acticleCollection.findOne({
    _id: query._id
  })
  if (!total) throw stats.ErrNotFound
  const result = await db.acticleCollection.updateOne(
    { _id: query._id },
    { $set: query }
  )
  return result
}

/**
 * @param query
 * @returns
 */
export async function del(query: IActicle) {
  if (query._id !== undefined) query._id = new ObjectId(query._id)
  const total = await db.acticleCollection.findOne(query)
  if (!total) throw stats.ErrNotFound
  const result = await db.acticleCollection.deleteMany(query)
  return result
}

/**
 * @param filter
 * @param pageSize
 * @param pageIndex
 * @returns
 */
export async function list(filter: {}, pageSize?: number, pageIndex?: number) {
  const result = await db.acticleCollection
    .find(filter)
    .sort({ createdAt: -1 })
    .toArray()
  return result
}
