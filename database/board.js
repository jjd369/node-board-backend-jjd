const { getDatabase } = require('./mongo')
const { ObjectID } = require('mongodb')

let collectionName = 'board'

async function insertBoard(obj) {
  const database = await getDatabase()
  database.collection(collectionName).insertOne(obj)
}

async function getAllBoard() {
  const database = await getDatabase()
  return database.collection(collectionName).find({}).toArray()
}

module.exports = {
  insertBoard,
  getAllBoard
}