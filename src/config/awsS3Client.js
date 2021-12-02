import s3 from 's3-client'

export const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.REGION
  }
})