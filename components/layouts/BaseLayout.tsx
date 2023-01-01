import { Fragment, ReactNode, useEffect, useState, type FC } from "react"
import { Header, Footer, LoadingOverlay } from "../navigation"
import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion";

type Props = {
  children: ReactNode
}

const BaseLayout:FC<Props> = ({children}:Props) => {

  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    // hide loading after initial page load
    setTimeout(() => {
      setLoading(false)
    }
    , 1500)
  }, [])

  useEffect(() => {
    const handleRouteChangeStart = () => {
      console.log("ROUTE CHANGE START")
      setLoading(true)
    }
    const handleRouteChangeComplete = () => {
      console.log("ROUTE CHANGE COMPLETE")
      // delay to allow for animation to finish
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }

    router.events.on("routeChangeStart", handleRouteChangeStart)
    router.events.on("routeChangeComplete", handleRouteChangeComplete)

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart)
      router.events.off("routeChangeComplete", handleRouteChangeComplete)
    }
  }, [])

  return (
    <Fragment>
      <AnimatePresence
        initial={false}
      >
        {loading && (
          <LoadingOverlay/>
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-[10px] min-h-screen w-screen overflow-y-auto px-4 lg:px-24">
        <Header/>
        <main className="flex-1 w-full mt-24">
          {children}
        </main>
        <Footer/>
      </div>
    </Fragment>
  )
}

export default BaseLayout