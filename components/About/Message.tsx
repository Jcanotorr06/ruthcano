import React, { FC } from "react"
import Image from "next/image"
import { NextFont } from "@next/font/dist/types"
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
        <article className="relative w-full h-screen -mt-24 flex flex-col items-center z-0">
            <div className="mt-24 grow z-10 w-full mix-blend-difference flex items-end lg:px-24">
                <h1 className={`ui-5xl lg:ui-9xl upper ${font.className}`}  data-translate="title_1">
                    {title_1 ? title_1.value : "title_1"}
                </h1>
            </div>
            <Image
                src="/images/about.webp"
                alt="Ruth Cano"
                width={547}
                height={749}
                sizes="(max-width: 768px) 800px, (max-width: 1024px) 547px, 547px"
                priority
                className="absolute transform -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2"
            />
            <div className="lg:my-24 grow z-10 mix-blend-difference w-full text-right lg:px-24">
                <h1 className={`ui-5xl lg:ui-9xl upper ${font.className}`} data-translate="title_2">
                    {title_2 ? title_2.value : "title_2"}
                </h1>
            </div>
        </article>
  )
}

export default Message