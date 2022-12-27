import { type FC, useState, useEffect } from "react"
import { motion } from "framer-motion";

const Cursor:FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const variants = {
        default: {
            x: position.x -8,
            y: position.y -8,
        }
    }

    useEffect(() => {
        const onMouseMove = (e:MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        document.addEventListener("mousemove", onMouseMove)

        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])

    if(typeof window !==  "undefined" && window.innerWidth < 768){
        return null
    }

    return (
        <motion.div
            role="cursor"
            className="bg-surface rounded-full w-4 h-4 fixed z-50 top-0 left-0 pointer-events-none mix-blend-difference"
            variants={variants}
            animate="default"
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
            }}
        />
    )
}

export default Cursor