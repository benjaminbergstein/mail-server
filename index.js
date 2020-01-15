const nodemailer = require('nodemailer');


const config = {
  host: "dev-2.wips.link",
  port: 465,
  secure: true,
  auth: {
    user: "me@benjaminbergstein.com",
    pass: "foobarpaloma"
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const message = {
  from: "me@benjaminbergstein.com",
  to: "bennyjbergstein@gmail.com",
  subject: "Hello",
  text: "Testing!",
  html: "<p>Testing!</p>"
};

const transporter = nodemailer.createTransport(config);
transporter.sendMail(message, (err) => {
    console.log(err);
});
