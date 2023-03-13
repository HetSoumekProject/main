// const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'ahlemfarhani2@gmail.com',
//       pass: "mynewpassword123@",
//       clientSecret: "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",
//       refreshToken: "https://oauth2.googleapis.com/token"
//     }
//   });

//   let mailOptions = {
//     from: "ahlemfarhani2@gmail.com",
//     to: email,
//     subject: 'Subject line of your email',
//     text: message
//   };
// module.exports={
//  send: transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Email sent');
//     }
//   })
// }
