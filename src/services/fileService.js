require('dotenv').config()
import AWS from 'aws-sdk'
import fs from 'fs'


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us_east-1'
})

export function s3Upload() {

  let param = {
    'Bucket': 'board-file-upload-jjd',
    'Key': 'images/test.txt',
    'Body': fs.createReadStream('94.png'),
    'ContentType': 'image/png'
  }

  s3.upload(param, function (err, data) {
    console.log(err)
    console.log(data)
  });
}
