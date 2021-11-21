import { MongoClient, Collection, WithId } from 'mongodb'

import config from './config'
import {
  IFile,
  IUser,
  IOpenSource,
  IThoughts,
  IActicle,
  IToken
} from './types'

export let userCollection: Collection<WithId<IUser>>
export let acticleCollection: Collection<WithId<IActicle>>
export let tokenCollection: Collection<WithId<IToken>>
export let openSourceCollection: Collection<WithId<IOpenSource>>
export let thoughtsCollection: Collection<WithId<IThoughts>>
export let fileCollection: Collection<WithId<IFile>>

export async function connect() {
  const client = await MongoClient.connect(config.mongoUrl)
  const db = client.db(config.mongoDb)
  fileCollection = db.collection('fileCollection')
  userCollection = db.collection('users')
  acticleCollection = db.collection('acticles')
  tokenCollection = db.collection('tokens')
  openSourceCollection = db.collection('openSource')
  thoughtsCollection = db.collection('thoughts')
  userCollection.createIndex(
    {
      username: 1
    },
    {
      unique: true
    }
  )
  tokenCollection.createIndex(
    {
      createdAt: 1
    },
    {
      expireAfterSeconds: config.tokenExpires
    }
  )
}
