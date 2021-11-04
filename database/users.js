const { getDatabase } = require('./mongo')
const { ObjectID } = require('mongodb')

let collectionName = 'users'

async function insertUser(obj) {
  const database = await getDatabase()
  const { insertedId } = await database.collection(collectionName).insertOne(obj)
  return insertedId
}

async function getUsers() {
  const database = await getDatabase()
  return await database.collection(collectionName).find({}).toArray()
}

async function getUser(obj) {
  const database = await getDatabase()
  return await database.collection(collectionName).findOne(obj)
}

async function deleteUser(id) {
  const database = await getDatabase()
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id)
  })
}

async function updateUser(id, user) {
  const database = await getDatabase()
  delete user._id
  await database.collection(collectionName).updata(
    { _id: new ObjectID(id) },
    {
      $set: {
        ...user
      }
    }
  )
}

module.exports = {
  insertUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};