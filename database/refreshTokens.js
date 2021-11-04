const { getDatabase } = require('./mongo')
const { ObjectID } = require('mongodb')

let collectionName = 'refreshTokens'

async function getTokens() {
  const database = await getDatabase()
  return await database.collection(collectionName).find({}).toArray()
}

async function getToken(refreshToken) {
  const database = await getDatabase()
  return await database.collection(collectionName).find({ refreshToken }).toArray()
}

async function insertToken(refreshToken) {
  const database = await getDatabase()
  await database.collection(collectionName).insertOne({ refreshToken })
}

async function deleteToken(refreshToken) {
  const database = await getDatabase()
  return await database.collection(collectionName).deleteOne({ refreshToken })
}


module.exports = {
  getTokens,
  getToken,
  insertToken,
  deleteToken
}