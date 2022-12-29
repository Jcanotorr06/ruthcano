import React, { FC } from "react"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link"
import { useRouter } from "next/dist/client/router";

type Props = {
  isOpen: boolean
  handleClose: () => void
}

const Drawer:FC<Props> = (props:Props) => {

  const { isOpen, handleClose } = props

  const links = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Work",
      href: "/work/all"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ]

  const router = useRouter()

  return (
    <AnimatePresence
      exitBeforeEnter
    >
      {isOpen && (
        <motion.div
          className="absolute top-0 left-0 w-screen h-screen grid grid-cols-1 lg:grid-cols-2"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.1
          }}
        >
          <motion.div
            className="absolute top-0 left-0 w-screen mix-blend-difference py-8 grid grid-cols-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5,
              staggerChildren: 0.5
            }}
          >
            <small className="px-8 hidden lg:block">
              Hope you&apos;re having a great day!
            </small>
            <div className="px-8 col-span-2 lg:col-span-1">
              <small>
                Ruth Cano - Portfolio {new Date().getFullYear()}
              </small>
            </div>
          </motion.div>
          <div className="bg-background h-full hidden lg:block">
          </div>
          <div className="bg-surface text-background h-full flex flex-col justify-center gap-16">
            {
              links.map((item, index) => (
                <motion.div
                  key={index}
                  className="w-full h-20 flex items-center justify-center"
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1 + (index * 0.2)
                  }}
                >
                  <motion.div
                    className="ui-4xl lg:ui-6xl font-medium w-full px-4"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.1 + (index * 0.2)
                    }}
                    onClick={handleClose}
                  >
                    <Link href={item.href} className={`flex justify-between w-full hover:text-background transition-colors ${router.asPath === item.href ? "text-background underline" : "text-secondary-body"}`}>
                      <span className="ui-sm font-normal">
                        /0{index + 1}
                      </span>
                      <span>
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              ))
            }
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Drawer