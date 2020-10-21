const nodemailer = require('nodemailer');
const config = require('../config.json');

const smtpTestOptions = {
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "rahul.ruecker@ethereal.email",
        pass: "MC1g6F3SnK4XHX7TEs"
    }
}

const smtpMailjetOptions = {
    host: "in-v3.mailjet.com",
    port: 587,
    auth: {
        user: "387a03be7a20dcfd423420d29e802d8f",
        pass: "fa5a9be8a1d95cc8b9342c18244dc6f4"
    }
}

const emailFrom = "rahul.ruecker@ethereal.email";

async function sendEmail({ to, subject, html, from = emailFrom }) {
    const transporter = nodemailer.createTransport(smtpMailjetOptions);
    await transporter.sendMail({ from, to, subject, html });
    console.log('Email successfully sent')
}

module.exports = sendEmail;
