import boardModel from '../models/borad'
import fileModel from '../models/file'
import filter from 'lodash/filter'

export async function getBoards(query) {
  const { page, listNum, search, searchAuthor } = query
  let boardRecord = null
  let totalPage = 0
  let lists = []
  // 검색 값이 없을 때
  if (!search && !searchAuthor) {
    boardRecord = await boardModel.find({ isDeleted: false })
      .populate({ path: 'uploadedBy', select: ['email', 'name'] })
      .populate({ path: 'attachment', match: { isDeleted: false } })

    totalPage = Math.ceil(boardRecord.length / listNum)
    lists = boardRecord.reverse().slice(page * listNum - listNum, page * listNum)
    return { totalPage, listNum, page, lists }
  }
  // 제목/ 내용 검색 값 있을 때
  if (search && !searchAuthor) {
    boardRecord = await boardModel.find({
      $and: [
        { $or: [{ title: search }, { content: search }] },
        { isDeleted: false }
      ]
    })
      .populate({ path: 'uploadedBy', select: ['email', 'name'] })
      .populate({ path: 'attachment', match: { isDeleted: false } })

    totalPage = Math.ceil(boardRecord.length / listNum)
    lists = boardRecord.reverse().slice(page * listNum - listNum, page * listNum)
    return { totalPage, listNum, page, lists }
  }
  // 제목/ 내용 검색 값 있을 때

  if (searchAuthor && !search) {
    boardRecord = await boardModel.find({ isDeleted: false })
      .populate({ path: 'uploadedBy', match: { name: searchAuthor }, select: ['email', 'name'], })
      .populate({ path: 'attachment', match: { isDeleted: false } })

    const filteBoardRecord = filter(boardRecord, el => el.uploadedBy)

    totalPage = Math.ceil(filteBoardRecord.length / listNum)
    lists = filteBoardRecord.reverse().slice(page * listNum - listNum, page * listNum)
    return { totalPage, listNum, page, lists }
  }
}

export async function getMyBoards(query, userInfo) {
  const { page, listNum, search } = query
  let boardRecord = null
  let totalPage = 0
  let lists = []

  if (!search) {
    // 검색어 없을 때
    boardRecord = await boardModel.find({ isDeleted: false })
      .populate({ path: 'uploadedBy', match: { email: userInfo.email }, select: ['email', 'name'] })
      .populate({ path: 'attachment', match: { isDeleted: false } })
  } else {
    // 검색어 있을 떄
    boardRecord = await boardModel.find({
      $and: [
        { $or: [{ title: search }, { content: search }] },
        { isDeleted: false }
      ]
    })
      .populate({ path: 'uploadedBy', match: { email: userInfo.email }, select: ['email', 'name'] })
      .populate({ path: 'attachment', match: { isDeleted: false } })
  }

  const filteBoardRecord = filter(boardRecord, el => el.uploadedBy)

  totalPage = Math.ceil(filteBoardRecord.length / listNum)
  lists = filteBoardRecord.reverse().slice(page * listNum - listNum, page * listNum)
  return { totalPage, listNum, page, lists }

}

export async function getBoard(_id) {
  const boardRecord = await boardModel.findOneAndUpdate({ _id, isDeleted: false }, { $inc: { view: 1 } })
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
    .populate({ path: 'attachment', match: { isDeleted: false } })

  return boardRecord
}

export async function writeBoard(body, userInfo, files) {

  if (files.length) {
    const fileRecords = await Promise.all(files.map(file => {
      return fileModel.create({
        originalFileName: file.originalname,
        serverFileName: file.key,
        uploadedBy: userInfo._id,
        location: file.location,
        size: file.size,
      })
    }))
    const files_id = fileRecords.map(file => file._id)
    const boardRecord = await boardModel.create({ uploadedBy: userInfo._id, ...body, attachment: files_id })
    return boardRecord
  }

  const result = await boardModel.create({ uploadedBy: userInfo._id, ...body })
  return result
}

export async function updateBoard(body, userInfo, files) {
  // 이메일 확인
  if (userInfo.email !== body.email) throw Error('권한이 없습니다.')

  // 제거할 첨부파일 없을 때 기본 값으로 [] 설정
  if (!body.removeFileIds) body.removeFileIds = []
  // remove file id 가 string으로 한개만 있을 때 배열로 변경
  if (!Array.isArray(body.removeFileIds)) {
    body.removeFileIds = [body.removeFileIds]
  }
  // 기존 첨부 파일 가져오기
  const existAttachment = await boardModel.findOne({ _id: body._id }, 'attachment').populate({ path: 'attachment', match: { isDeleted: false } })
  // 첨부 파일 총 개수 계산
  const totalAttachmentCount = files.length + existAttachment.attachment.length - body.removeFileIds.length
  //  4개 이상이면 에러 리턴
  if (totalAttachmentCount > 3) {
    throw Error('첨부파일이 3개를 초과 했습니다.')
  }
  // 첨부파일 제거
  if (body.removeFileIds.length) {
    await Promise.all(body.removeFileIds.map(async id => {
      return fileModel.updateOne({ _id: id }, { isDeleted: true })
    }))
  }
  // 첨부파일 추가
  if (files.length) {
    const fileRecords = await Promise.all(files.map(async file => {
      return fileModel.create({
        originalFileName: file.originalname,
        serverFileName: file.key,
        uploadedBy: userInfo._id,
        location: file.location,
        size: file.size,
        // boardId: body._id
      })
    }))
    const files_id = fileRecords.map(file => file._id)
    return await boardModel.updateOne({ _id: body._id }, { $push: { attachment: files_id, }, updatedAt: Date.now(), ...body })
  }
  // file 없을 때
  return await boardModel.updateOne({ _id: body._id }, { updatedAt: Date.now(), ...body })
}

export async function deleteBoard(body, userInfo) {
  // 이메일 확인
  const boardRecord = await boardModel.findOne({ _id: body._id }).populate({ path: 'uploadedBy', select: ['name', 'email'] })
  if (userInfo.email !== boardRecord.uploadedBy.email) throw Error('권한이 없습니다.')

  return await boardModel.updateOne({ _id: body._id }, { isDeleted: true })

}