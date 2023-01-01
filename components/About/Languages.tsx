import React, { FC } from "react"
import { motion } from "framer-motion"

const Languages:FC = () => {

  const languages = [
    {
      name: "English",
      proficiency: "Bilingual Proficiency"
    },
    {
      name: "Spanish",
      proficiency: "Native Speaker"
    },
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
        <h3 className="ui-3xl upper font-semibold">Languages</h3>
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        {
          languages.map((language, key) => (
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
              <h4 className="ui-xl upper font-semibold">{language.name}</h4>
              <p className="ui-sm">{language.proficiency}</p>
            </motion.div>
          ))
        }
      </div>
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5}}
        className="absolute -top-0 left-0 z-0 hidden lg:block"
      >
        <span className="ui-4xl upper font-semibold opacity-25" style={{writingMode: "vertical-lr"}}>
          Languages
        </span>
      </motion.div>
    </article>
  )
}

export default Languages