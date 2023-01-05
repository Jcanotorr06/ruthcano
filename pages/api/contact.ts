import { NextApiHandler } from "next";
import nodemailer from "nodemailer";
import { emailTemplate } from "../../utils/contactMailTemplate";

const handler:NextApiHandler = async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: process.env.EMAIL_PORT,
        host: process.env.EMAIL_HOST,
        secure: false,
        auth: {
            user: process.env.EMAIL_AUTH_USER,
            pass: process.env.EMAIL_AUTH_PASS,
        },
    })

    // Verify connection configuration
    await new Promise((resolve, reject) => {
        transporter.verify((error, success) => {
            if (error) {
                console.log(error)
                reject(error)
                res.status(500).json({ error: "Server error" })
            } else {
                console.log("Server is ready to take our messages")
                resolve(success)
                return true
            }
        })
    })

    const mailData = {
        from: "\"Portfolio Contact Form\" <llinus907@gmail.com>",
        to: "josephct06@gmail.com",
        subject: `Message from ${req.body.name} with email ${req.body.email} from your website`,
        text: req.body.message,
        html: emailTemplate(req.body.name, req.body.email, req.body.message),
    }

    await new Promise((resolve, reject) => {
        // send mail with defined transport object
        transporter.sendMail(mailData, (error, info) => {
            if (error) {
                console.log(error)
                reject(error)
                res.status(500).json({ error: "Server error" })
            } else {
                console.log("Message sent: %s", info.messageId)
                resolve(info)
                res.status(200).json({ success: "Message sent" })
            }
        })
    })
}

export default handler