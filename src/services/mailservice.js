// import nodemailer from 'nodemailer'

// let transporter = nodemailer.createTransport({
//   // gamil 계정으로 전송
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   auth: {
//     // 계정 주소
//     user: process.env.NODEMAILER_USER,
//     // 계정 비밀번호
//     pass: process.env.NODEMAILER_PASS
//   }
// })

// export async function sendMail(data) {
//   let info = await transporter.sendMail({
//     from: `JJD portfolio <${process.env.NODEMAILER_USER}>`,
//     to: data.email,
//     subject: '회원가입을 축하드립니다.',
//     text: '테스트 서버에 회원가입 하셨습니다.',
//     // html: `<b>test</b>`
//   })

//   return info.messageId
// }



