import { type FC } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WorkResponse } from "../../types/notion"

type Props = {
    page: WorkResponse|null,
    selSelected: (page:WorkResponse|null) => void
}

const Modal:FC<Props> = (props:Props) => {
    const { page, selSelected } = props

    const title = page? page.properties.Name.title[0].plain_text : null
    const description = page? page.properties.Description.rich_text[0].plain_text : null
    const media = page? page.properties.Media.files[0] : null
    const category = page? page.properties.category.select.name : null

    const isVideo = category === "videography"

    const videoId = media? (media.type === "external" && isVideo) ? media.external.url.split("v=")[1] : null : null
    const src = media ? media.type === "external" ? isVideo ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : media.external.url : media.file.url : null

    const handleClose = () => {
        selSelected(null)
        document.body.style.overflow = "auto"
    }

    const currentUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.ruthcano.com"

    return (
        <AnimatePresence>
            {
                page && src && title && description ?
                    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-80 z-50">
                        <div className="relative w-full h-full flex flex-col items-center justify-center py-4 px-12 gap-[10px]">
                            <div className="absolute top-0 right-0 p-4 cursor-pointer" onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {
                                !isVideo && 
                                <div className="text-center grow">
                                    <h1 className="ui-3xl upper font-semibold">{title}</h1>
                                </div>
                            }
                            <div className="flex-1 w-full p-2 flex justify-center items-center" style={{maxHeight: "80vh"}}>
                                {
                                    isVideo ?
                                        <iframe
                                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=${currentUrl}}`}
                                            title={title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                        :
                                        <img
                                            src={src}
                                            alt={title}
                                            className="max-w-full max-h-full"
                                        />
                                }
                            </div>
                            {
                                !isVideo &&
                                <div className="text-center w-full grow">
                                    <p className="ui-2xl">{description}</p>
                                </div>
                            }
                        </div>
                    </div>
                    : null
            }
        </AnimatePresence>
    )
}

export default Modal