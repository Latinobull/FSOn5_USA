const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'g.donnahue@goit.global',
    pass: process.env.EMAIL_APIKEY,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
function sendMessage(email) {
  const message = {
    from: 'g.donnahue@goit.global',
    to: email,
    subject: 'Learning nodemailer',
    html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style>
              body {
                text-align: center;
              }
              .box {
                background-color: red;
              }
            </style>
          </head>
          <body>
            <h1>This is my new email message</h1>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <footer>
              <p>All Rights Reserved</p>
            </footer>
          </body>
        </html>
        `,
  };
  transporter.sendMail(message, (err, info) =>
    err ? console.log(err) : console.log('Email sent', info)
  );
}

sendMessage('loki@gmail.com');
const emails = [1, 2, 3, 4, 5, 6, 7, 8, 9];

emails.forEach(email => sendMessage(email));
