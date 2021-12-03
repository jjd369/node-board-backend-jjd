import { s3, s3Client } from '../config/awsS3Client'

export async function getSignedUrl({ fileName, fileType }) {

  const s3Params = {
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  }

  try {
    const data = await s3.getSignedUrl('putObject', s3Params)

    const returnData = {
      signedRequest: data,
      url: `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${fileName}`
    }

    return returnData
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