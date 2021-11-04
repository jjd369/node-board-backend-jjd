import tokenModel from '@/models/tokens'

export async function insertToken(data) {
  return await tokenModel.create(data)
}

export async function getToken(data) {
  return await tokenModel.findOne(data)
}

