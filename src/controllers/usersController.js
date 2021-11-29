import usersModel from '../models/users'


export async function insertUser(data) {
  return await usersModel.create(data)
}

export async function getUser(data) {
  return await usersModel.findOne(data)
}

export async function deleteUser(data) {
  return await usersModel.deleteOne(data)
}

export async function updateUser(data) {
  await usersModel.updata(
    { _id: data.id },
    {
      ...data
    }
  )
}