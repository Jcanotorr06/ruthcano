import React, { FC } from "react"
import { motion } from "framer-motion"
import { SiAdobeaudition,  SiAdobeillustrator, SiMailchimp, SiAdobepremierepro, SiAdobelightroom, SiNotion, SiAdobeindesign } from "react-icons/si"

const Tools:FC = () => {

    const tools = [
        {
            name: "Adobe Premiere Pro",
            icon: <SiAdobepremierepro/>
        },
        {
            name: "Adobe Illustrator",
            icon: <SiAdobeillustrator/>
        },
        {
            name: "Adobe Lightroom",
            icon: <SiAdobelightroom/>
        },
        {
            name: "Adobe Audition",
            icon: <SiAdobeaudition/>
        },
        {
            name: "Adobe InDesign",
            icon: <SiAdobeindesign/>
        },
        {
            name: "Notion",
            icon: <SiNotion/>
        },
        {
            name: "Mailchimp",
            icon: <SiMailchimp/>
        }
    ]

    const variants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <article className="w-full py-4 flex flex-col gap-4 lg:gap-0 lg:grid grid-flow-col grid-cols-7 grid-rows-2 lg:grid-rows-1 my-8 lg:my-20 z-10">
            <div className="col-span-7 lg:col-span-3 h-fit">
                <h3 className="ui-xl lg:ui-3xl upper font-semibold">Tools</h3>
            </div>
            <div className="col-span-7 lg:col-span-4 flex flex-wrap gap-y-24">
                {
                    tools.map((tool, key) => (
                        <motion.div 
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: key * 0.1,
                                duration: 0.5,
                            }}
                            key={key}
                            className="w-1/4 flex lg:justify-center"
                        >
                            <div className="w-fit ui-2xl lg:ui-4xl tooltip" data-tip={tool.name}>
                                {tool.icon}
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </article>
    )
}

export default Tools