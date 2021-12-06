import { s3 } from '../config/awsS3Client'
import fileModle from '../models/file'

export async function getObject(key) {
  try {
    const fileRecord = await fileModle.findOne({ serverFileName: key })

    const s3Params = {
      Bucket: process.env.S3_BUCKET,
      Key: key
    }

    const fileStream = await s3.getObject(s3Params)
    return { fileStream, originalFileName: fileRecord.originalFileName }
  } catch (err) {
    throw Error(err)
  }
}

export async function deleteObject(imageUrl) {
  const imageKey = imageUrl.match(/\d{13}/)

  var bucketParams = {
    Bucket: process.env.S3_BUCKET,
    Delete: {
      Objects: [
        {
          Key: `userImages/ ${key}`
        },
      ],
      Quiet: false
    }
  }
  const data = await s3.deleteObjects(bucketParams)
  return data
}