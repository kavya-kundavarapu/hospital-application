const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "kavyakundavarapu1201@gmail.com",
    pass: "ulqd nota pcmb mawk",
  },
});
module.exports = transporter;
