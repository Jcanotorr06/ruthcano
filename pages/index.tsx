import { type NextPage } from "next"
import {NextSeo} from "next-seo"
import { Fragment } from "react"
import { CTA, Name, Work } from "../components/Landing"

const Home:NextPage = () => {
  return (
    <Fragment>
      <NextSeo
        title="Welcome"
      />
      <Name/>
      <Work/>
      <CTA/>
    </Fragment>
  )
}

export default Home