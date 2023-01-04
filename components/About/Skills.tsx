import React, { FC } from "react"
import { motion } from "framer-motion"

const Skills:FC = () => {

    const skills = [
        "Adaptability / Critical Thinking / Problem Solving",
        "Teamwork / Active Listening / Communication",
        "Research / Writing / Information Analysis ",
        "Project Management / Planning / Attention to Detail",
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
        <article className="w-full py-4 flex flex-col md:flex-row gap-4 relative my-8 lg:my-20">
            <div className="w-full md:w-1/3 h-fit">
                <h3 className="ui-xl lg:ui-3xl upper font-semibold">Skills</h3>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-8">
                {
                    skills.map((skill, key) => (
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
                            className="w-full gap-4 border-b-2 border-secondary-body"
                        >
                            <h4 className="ui-sm lg:ui-xl upper lg:font-semibold">{skill}</h4>
                        </motion.div>
                    ))
                }
            </div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5}}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-0 hidden lg:block"
            >
                <span className="ui-8xl upper font-semibold opacity-25" style={{writingMode: "vertical-lr"}}>
                    Skills
                </span>
            </motion.div>
        </article>
    )
}

export default Skills