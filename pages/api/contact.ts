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

    const mailData = {
        from: "\"Portfolio Contact Form\" <llinus907@gmail.com>",
        to: process.env.EMAIL_CONTACT_TO,
        subject: `Message from ${req.body.name} with email ${req.body.email} from your website`,
        text: req.body.message,
        html: emailTemplate(req.body.name, req.body.email, req.body.message),
    }

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            console.log(error)
            res.status(500).json({ message: "Something went wrong" })
        } else {
            console.log(info)
            res.status(200).json({ message: "Message sent successfully" })
        }
    })
}

export default handler