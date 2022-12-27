import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { Fragment } from "react"
import { DefaultSeo } from "next-seo"
import NextNProgress from "nextjs-progressbar"
import SEO from "../next-seo.config"
import BaseLayout from "../components/layouts/BaseLayout"
import disableReactDevTools from "../utils/disableReactDevTools"
import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("../components/navigation/Cursor"), { ssr: false })

if(typeof window !== "undefined" && process.env.NODE_ENV === "production"){
  disableReactDevTools()
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <DefaultSeo
        {...SEO}
      />
      <NextNProgress
        color="#FFF"
      />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
      <Cursor/>
    </Fragment>
  )
}

export default App
