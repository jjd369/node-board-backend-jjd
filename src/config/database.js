// import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

export async function startDatabase() {
  // mongo db Atlas Cluster  url
  const uri = process.env.MONGODB_URI

  // const mongo = await MongoMemoryServer.create()
  // const mongoDURL = mongo.getUri()
  const connection = await mongoose.connect(uri, { useNewUrlParser: true })

  return connection
}