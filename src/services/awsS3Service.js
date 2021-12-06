import { s3, s3Client } from '../config/awsS3Client'

export async function getObject(key) {

  const s3Params = {
    Bucket: process.env.S3_BUCKET,
    Key: key
  }
  try {
    const data = await s3.getObject(s3Params).promise()
    return data
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