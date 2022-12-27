import { NextApiHandler } from "next"

const handler:NextApiHandler = async (req, res) => {
    if(req.query.secret !== process.env.REVALIDATION_SECRET) {
        return res.status(401).json({message: "Invalid secret"})
    }

    try {
        const category = req.query.path as string
        const categories = ["all","desings", "photography", "videography"]
        if(!category) {
            return res.status(400).json({message: "Missing path"})
        }
        if(!categories.includes(category)) {
            return res.status(400).json({message: "Invalid path"})
        }

        await res.revalidate(`/work/${category}`)
        return res.json({message: "Revalidation successful"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error Revalidating"})
    }
}

export default handler