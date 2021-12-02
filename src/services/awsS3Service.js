import { s3 } from '../config/awsS3Client'

export async function deleteObject(key) {
  console.log(key)
  var bucketParams = {
    Bucket: 'my-board-file-upload-jjd',
    Delete: {
      Objects: [
        {
          Key: `userImages/${key}`
        },
      ],
      Quiet: false
    }
  }
  const data = await s3.deleteObjects(bucketParams)
  return data
}