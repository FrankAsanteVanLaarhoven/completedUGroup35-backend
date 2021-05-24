import { createTransport } from "nodemailer"

const transport = createTransport ({
    host: process.env.MAIL_HOST,
    host: process.env.Mail_PORT,
    auth:{
        user: process.env
    }
})
