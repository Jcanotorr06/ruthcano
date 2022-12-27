import { type FC, useState } from "react"
import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import Drawer from "./Drawer"

const Header:FC = () => {
  const [ hidden, setHidden ] = useState<boolean>(false)
  const [ isOpen, setIsOpen ] = useState<boolean>(false)

  const { scrollY } = useScroll()

  const variants = {
    hidden: { y: -100 },
    visible: { y: 0 }
  }

  scrollY.onChange((y) => {
    if (y > 50) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const handleClose = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  const handleToggle = () => {
    setIsOpen(i => !i)
    document.body.style.overflow === "hidden" ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden"
  }

  return (
    <motion.header 
      className="fixed w-full flex items-center py-7 gap-[10px] select-none left-0 top-0 px-4 lg:px-24"
      style={{ zIndex: 1 }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      variants={variants}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 0.2
      }}
    >
      <div className="w-fit">
        <Link href="/">
          <h6 className="ui-lg upper font-medium text-surface">
            Ruth Cano
          </h6>
        </Link>
      </div>
      <section className="flex items-center justify-end grow gap-16 ui-xs font-medium upper text-surface">
        {/* <Link href="/about">
          About
        </Link>
        <Link href="/work/all">
          Work
        </Link>
        <Link href="/contact">
          Contact
        </Link> */}
        <div className={`relative z-20 mix-blend-difference menu-btn ${isOpen ? "menu-open" : ""}`} onClick={handleToggle}>
          <div className="menu-btn-line"></div>
        </div>
      </section>
      <Drawer isOpen={isOpen} handleClose={handleClose} />
    </motion.header>
  )
}

export default Header