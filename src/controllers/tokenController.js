import tokensModel from '@/models/tokens'

export async function insertToken(data) {
  return await tokensModel.create(data)
}

export async function getToken(data) {
  return await tokensModel.findOne(data)
}

export async function deleteToken(data) {
  return await tokensModel.deleteOne(data)
}

