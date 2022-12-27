import { type NextPage } from "next"
import { NextSeo } from "next-seo"
import { Fragment } from "react"
import { ContactForm } from "../components/Contact"

const Contact:NextPage = () => {
  return (
    <Fragment>
      <NextSeo
        title="Contact"
        description="Contact Ruth Cano"
      />
      <section className="w-full flex flex-col pt-[60px] self-stretch grow">
        <div className="w-fit">
          <h1 className="ui-7xl font-semibold">
            I&apos;m Available! Let&apos;s Talk!
          </h1>
          <p className="text-secondary-body ui-2xl">
            Reach out and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm/>
      </section>

    </Fragment>
  )
}

export default Contact