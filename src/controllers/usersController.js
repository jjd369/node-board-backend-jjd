import usersModel from '@/models/users'
import { ObjectID } from 'mongodb'


export async function insertUser(data) {
  return await usersModel.create(data)
}

export async function getUser(data) {
  return await usersModel.findOne(data)
}

export async function deleteUser(id) {
  return await usersModel.deleteOne({
    _id: new ObjectID(id)
  })
}

export async function updateUser(id, user) {
  delete user._id
  await usersModel.updata(
    { _id: new ObjectID(id) },
    {
      $set: {
        ...user
      }
    }
  )
}