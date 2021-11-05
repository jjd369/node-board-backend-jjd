import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

export async function startDatabase() {
  const mongo = await MongoMemoryServer.create()
  const mongoDURL = mongo.getUri()
  const connection = await mongoose.connect(mongoDURL, { useNewUrlParser: true })

  return connection
}