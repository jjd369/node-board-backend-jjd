const { MongoMemoryServer } = require('mongodb-memory-server')
const { MongoClient } = require('mongodb')

let database = null
console.log(database)
async function startDatabase() {
  const mongo = await MongoMemoryServer.create()
  const mongoDURL = mongo.getUri()
  const connection = await MongoClient.connect(mongoDURL, { useNewUrlParser: true })

  database = connection.db()
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database
}

module.exports = {
  getDatabase,
  startDatabase,
}