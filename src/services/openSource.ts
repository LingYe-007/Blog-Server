import { ObjectId } from 'mongodb'
import * as db from '../db'
import stats from '../stats'
import { IOpenSource } from '../types'

/**
 * @param openSource
 * @returns
 */
export async function add(openSource: IOpenSource) {
  const total = await db.openSourceCollection.findOne(openSource)
  if (total !== undefined) throw stats.ErrBadParams
  const result = await db.openSourceCollection.insertOne(openSource)
  return result
}

/**
 * @param list
 * @returns
 */
export async function list(filter: {}) {
  const result = await db.openSourceCollection.find(filter).toArray()
  return result
}

/**
 * @param del
 * @returns
 */
export async function del(query: IOpenSource) {
  if (query._id !== undefined) query._id = new ObjectId(query._id)
  const result = await db.openSourceCollection.deleteMany(query)
  return result
}
