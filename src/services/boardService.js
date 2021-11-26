import boardModel from '@/models/borad'
import fileModel from '@/models/file'

export async function getBoards(body) {
  const { page, listNum } = body

  const boardRecord = await boardModel.find({})
    .populate('uploadedBy', ['email', 'name'])
    .populate('attachment')

  const totalPage = Math.ceil(boardRecord / listNum)
  return boardRecord
}

export async function getBoard(_id) {
  const boardRecord = await boardModel.findOne({ _id })
    .populate({
      path: 'comments', populate: [
        {
          path: 'comments', populate: {
            path: 'uploadedBy',
            select: ['name', 'email', 'image']
          }
        },
        {
          path: 'uploadedBy',
          select: ['name', 'email', 'image']
        }
      ]
    })
    .populate({ path: 'uploadedBy', select: ['name', 'email', 'image'] })
    .populate('attachment')

  return boardRecord
}

export async function writeBoard(body, userInfo, file) {
  if (file) {
    const createFile = await fileModel.create({ originalFileName: file.originalname, serverFileName: file.filename, uploadedBy: userInfo._id })
    const result = await boardModel.create({ uploadedBy: userInfo._id, ...body, attachment: createFile._id })
    return result
  }

  const result = await boardModel.create({ uploadedBy: userInfo._id, ...body })

  return result
}

export async function updateBoard(body, userInfo, file) {
  if (userInfo.email !== body.email) throw Error('권한이 없습니다.')
  // file 있을 때
  if (file) {
    // 기존 첨부 파일 있으면 삭제
    if (body.attachment_id) {
      await fileModel.deleteOne({ _id: body.attachment_id })
    }
    // 새로운 첨부 파일 db 저장
    const newfile = await fileModel.create({ originalFileName: file.originalname, serverFileName: file.filename, uploadedBy: userInfo._id })

    return await boardModel.updateOne({ _id: body._id }, { updatedAt: Date.now(), ...body, attachment: newfile._id })
  }
  // file 없을 때
  return await boardModel.updateOne({ _id: body._id }, { updatedAt: Date.now(), ...body })
}

export async function deleteBoard(_id) {
  return await boardModel.deleteOne({ _id })

}