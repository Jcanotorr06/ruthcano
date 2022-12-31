import { useEffect, useState, type FC } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { WorkResponse } from "../../types/notion"

type Props = {
    page: WorkResponse|null,
    setSelected: (page:WorkResponse|null) => void
    selectNext: () => void
    selectPrev: () => void
}

const Modal:FC<Props> = (props:Props) => {
    const { page, setSelected, selectNext, selectPrev } = props
    const currentUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.ruthcano.com"

    const title = page? page.properties.Name.title[0].plain_text : null
    const description = page? page.properties.Description.rich_text[0].plain_text : null
    const media = page? page.properties.Media.files[0] : null
    const category = page? page.properties.category.select.name : null

    const isVideo = category === "videography"

    /* const videoId = media? (media.type === "external" && isVideo) ? media.external.url.split("v=")[1] : null : null
    const src = media ? media.type === "external" ? isVideo ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : media.external.url : media.file.url : null */

    // get video id from url youtube (shortened or full) or vimeo (full)
    const isYoutube = media ? isVideo &&  media.type === "external" && media.external.url.includes("youtube"): null
    const isYoutubeShort = media ? isVideo && media.type === "external" && media.external.url.includes("youtu.be"): null
    const isVimeo = media ? isVideo && media.type === "external" && media.external.url.includes("vimeo"): null
    const videoId = media ? (media.type === "external" && isVideo)? isYoutube ? media.external.url.split("v=")[1] : isYoutubeShort ? media.external.url.split("be/")[1] : isVimeo ? media.external.url.split("com/")[1] : null: null: null

    const src = media ? media.type === "external" ? isYoutube || isYoutubeShort ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : isVimeo ? `https://vumbnail.com/${videoId}.jpg` : media.external.url : media.file.url : null

    const embedUrl = videoId ? isYoutube || isYoutubeShort ? `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=${currentUrl}` : isVimeo ? `https://player.vimeo.com/video/${videoId}?autoplay=1&origin=${currentUrl}` : null : null

    const [showDetails, setShowDetails] = useState<boolean>(false)

    useEffect(() => {
        // show details when mouse moves, hide when mouse stops moving for 2 seconds

        const timeout = setTimeout(() => {
            setShowDetails(false)
        }, 2000)

        const handleMouseMove = () => {
            console.log("mouse moved")
            setShowDetails(true)
            clearTimeout(timeout)
        }

        document.addEventListener("mousemove", handleMouseMove)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }

    }, [])

    const handleClose = () => {
        setSelected(null)
        document.body.style.overflow = "auto"
    }

    return (
        <AnimatePresence>
            {
                page && src && title && description ?
                    <motion.div
                        key={page.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-background z-50"
                    >
                        <div className="relative w-full h-full flex flex-col items-center justify-center py-4 px-12 gap-[10px]">
                            <div className="absolute top-0 right-0 p-4 cursor-pointer z-20" onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {
                                !isVideo &&
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{
                                            delay: 0.2
                                        }}
                                        className="text-center grow absolute top-0 w-full z-10 bg-background bg-opacity-50 py-8"
                                    >
                                        <h1 className="ui-3xl upper font-semibold">{title}</h1>
                                    </motion.div>
                            }
                            <div className="flex-1 w-full h-full p-2 flex justify-center items-center">
                                {
                                    isVideo && embedUrl ?
                                        <iframe
                                            src={embedUrl}
                                            title={title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                        :
                                        <motion.img
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            src={src}
                                            alt={title}
                                            className="max-w-full max-h-full"
                                        />
                                }
                            </div>
                            {
                                !isVideo &&
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{
                                        delay: 0.2
                                    }}
                                    className="text-center w-full grow absolute bottom-0 z-10 bg-background bg-opacity-50 py-8"
                                >
                                    <p className="ui-2xl">{description}</p>
                                </motion.div>
                            }
                        </div>
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 p-4">
                            <FaChevronLeft className="ui-2xl cursor-pointer" onClick={selectPrev} />
                        </div>
                        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 p-4">
                            <FaChevronRight className="ui-2xl cursor-pointer" onClick={selectNext} />
                        </div>
                    </motion.div>
                    : null
            }
        </AnimatePresence>
    )
}

export default Modal