import React, { type FC } from "react"
import { AnimatePresence, motion } from "framer-motion"

const LoadingOverlay:FC = () => {
    return (
        <motion.div
            initial={{ height:0 }}
            animate={{ height: "100vh" }}
            exit={{ y: "100%" }}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
            className="fixed bottom-0 left-0 w-screen h-screen bg-black z-50"
        >
                <div className="flex items-center justify-center h-full">
                    <AnimatePresence>
                        <motion.h2
                            key={"Ruth"}
                            initial={{opacity: 0, y: 200}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 200}}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut"
                            }}
                            className="ui-5xl upper font-semibold text-white"
                        >
                            Ruth&nbsp;
                        </motion.h2>
                        <motion.h2 
                            key={"Cano"}
                            initial={{opacity: 0, y: 200}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 200}}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                delay: 0.1
                            }}
                            className="ui-5xl upper font-semibold text-white"
                        >
                            Cano
                        </motion.h2>
                    </AnimatePresence>
                </div>
        </motion.div>
    )
}

export default LoadingOverlay