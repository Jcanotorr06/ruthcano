import { motion } from "framer-motion"
import { useState, type FC } from "react"
import { WorkResponse } from "../../types/notion"

type Props = {
    page: WorkResponse,
    index: number,
    setSelected: (page:WorkResponse|null) => void
}

const Card:FC<Props> = (props:Props) => {

    const { page, index, setSelected } = props
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const title = page.properties.Name.title[0].plain_text
    const description = page.properties.Description.rich_text[0].plain_text
    const media = page.properties.Media.files[0]
    const category = page.properties.category.select.name

    const isVideo = category === "videography"

    // get video id from url youtube (shortened or full) or vimeo (full)
    const isYoutube = isVideo &&  media.type === "external" && media.external.url.includes("youtube")
    const isYoutubeShort = isVideo && media.type === "external" && media.external.url.includes("youtu.be")
    const isVimeo = isVideo && media.type === "external" && media.external.url.includes("vimeo")
    const videoId = isYoutube ? media.external.url.split("v=")[1] : isYoutubeShort ? media.external.url.split("be/")[1] : isVimeo ? media.external.url.split("com/")[1] : null

    const src = media.type === "external" ? isYoutube || isYoutubeShort ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : isVimeo ? `https://vumbnail.com/${videoId}.jpg` : media.external.url : media.file.url

    const handleOpen = () => {
        setSelected(page)
        document.body.style.overflow = "hidden"
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleOpen}
            className="hover:cursor-pointer"
        >
            {
                media &&
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, staggerChildren: 0.5 }}
                >
                    <img src={src} alt={title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                    <section role="description">
                        <h3 className="text-surface font-semibold">{title}</h3>
                        <footer
                            className="text-secondary-body overflow-hidden relative"
                        >
                            <motion.p
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -20 : 0 }}
                            >
                                {description}
                            </motion.p>

                            <motion.p
                                className="absolute top-0 left-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                            >
                                Show more
                            </motion.p>
                        </footer>
                    </section>
                </motion.div>
            }
        </motion.div>
    )
}

export default Card