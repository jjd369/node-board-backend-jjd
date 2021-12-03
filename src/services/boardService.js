import boardModel from '../models/borad'
import file from '../models/file'
import fileModel from '../models/file'

export async function getBoards(query) {
  const { page, listNum } = query

  const boardRecord = await boardModel.find({})
    .populate('uploadedBy', ['email', 'name'])
    .populate('attachment')

  if (!boardRecord.length) return boardRecord

  const totalPage = Math.ceil(boardRecord.length / listNum)
  const lists = boardRecord.slice(page * listNum - listNum, page * listNum)
  return { totalPage, listNum, page, lists }
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

export async function writeBoard(body, userInfo, files) {
  console.log(file)
  if (file) {
    files.forEach(async file => {
      await fileModel.create({
        originalFileName: file.originalname,
        serverFileName: file.key,
        uploadedBy: userInfo._id,
        location: file.location,
        size: file.size
      })
    })
    const result = await boardModel.create({ uploadedBy: userInfo._id, ...body, attachment: [''] })
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