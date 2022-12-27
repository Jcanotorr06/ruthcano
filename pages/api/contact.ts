import { NextApiHandler } from "next";
import nodemailer from "nodemailer";

const handler:NextApiHandler = async (req, res) => {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL_AUTH_USER,
            pass: process.env.EMAIL_AUTH_PASS,
        },
        secure: true,
    })

    const mailData = {
        from: process.env.EMAIL_AUTH_USER,
        to: process.env.EMAIL_AUTH_USER,
        subject: `Message from ${req.body.name} with email ${req.body.email} from your website`,
        text: req.body.message,
        html: `<div>${req.body.message}</div>`,
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