const nodemailer = require("nodemailer");
require("dotenv").config();
module.exports.sendmail = (email, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "Bachworking21@gmail.com",
      pass: "vecereycwpsorlyr"
    },
  });

  const mailOptions = {
    from: "Bachworking21@gmail.com",
    to: email,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
};
