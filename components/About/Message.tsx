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
                    delay: 1,
                    delayChildren: 1,
                    ease: "easeOut"
                }}
                className="mt-24 grow z-10 w-full mix-blend-difference flex items-end lg:px-24"
            >
                <h1 className={`ui-5xl lg:ui-9xl upper ${font.className}`}  data-translate="title_1">
                    {title_1 ? title_1.value : "title_1"}
                </h1>
            </motion.div>
            <motion.div
                id="about-image"
                className="h-screen w-screen overflow-visible absolute -top-14  z-0"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 1.5,
                    delay: 1.35,
                    ease: "easeOut"
                }}
            >
            </motion.div>
            <motion.div 
                initial={{opacity: 0, y: 500}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 1,
                    delay: 1.25,
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