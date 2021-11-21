import * as db from '../db'
import stats from '../stats'
import { IThoughts } from '../types'

/**
 * @param thoughts
 * @returns
 */
export async function add(thoughts: IThoughts) {
  const total = await db.thoughtsCollection.findOne(thoughts)
  if (total !== undefined) throw stats.ErrForbidden
  const result = await db.thoughtsCollection.insertOne(thoughts)
  return result
}

/**
 * @param list
 * @returns
 */
export async function list(filter: {}) {
  const result = await db.thoughtsCollection.find(filter).toArray()
  return result
}

/**
 * @param del
 * @returns
 */
export async function del(query: IThoughts) {
  const result = await db.thoughtsCollection.deleteMany(query)
  return result
}
