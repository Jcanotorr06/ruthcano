import React, { FC } from "react"
import Image from "next/image"
import type { NextFont } from "@next/font/dist/types"
import { motion } from "framer-motion"
import { Translation } from "../../types/translations"

type Props = {
    font: NextFont,
    translations: Translation[]
}

const Message:FC<Props> = (props:Props) => {

    const { font, translations } = props

    const title_1 = translations.find((translation) => translation.label === "title_1")
    const title_2 = translations.find((translation) => translation.label === "title_2")

    return (
        <article className="relative w-full lg:h-screen -mt-24 flex flex-col items-center z-0">
            <motion.div
                initial={{opacity: 0, y: 500}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
                className="mt-24 grow z-10 w-full mix-blend-difference flex items-end lg:px-24"
            >
                <h1 className={`ui-5xl lg:ui-9xl upper ${font.className}`}  data-translate="title_1">
                    {title_1 ? title_1.value : "title_1"}
                </h1>
            </motion.div>
            <motion.div
                className="w-fit h-fit overflow-visible"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 1.5,
                    delay: 0.35,
                    ease: "easeOut"
                }}
            >
                <Image
                    src="/images/about_2.webp"
                    alt="Ruth Cano"
                    width={828}
                    height={465}
                    sizes="(max-width: 768px) 800px, (max-width: 1024px) 547px, 547px"
                    priority
                    className="absolute transform -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2"
                />
            </motion.div>
            <motion.div 
                initial={{opacity: 0, y: 500}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 1,
                    delay: 0.25,
                    ease: "easeOut"
                }}
                className="lg:my-24 grow z-10 mix-blend-difference w-full text-right lg:px-24"
            >
                <h1 className={`ui-5xl lg:ui-9xl upper ${font.className}`} data-translate="title_2">
                    {title_2 ? title_2.value : "title_2"}
                </h1>
            </motion.div>
        </article>
  )
}

export default Message