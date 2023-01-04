import { type NextPage } from "next";
import { NextSeo } from "next-seo";
import { Fragment } from "react";
import { Description, Languages, Message, Skills, Tools } from "../components/About";
import localFont from "@next/font/local"
import { Oooh_Baby } from "@next/font/google"
import { GetStaticProps } from "next/types";
import { getTranslationsByPage } from "../lib/notion";
import { Translation } from "../types/translations";

type PageProps = {
  translations: Translation[]
}

const OoohBaby = Oooh_Baby({
  weight: "400",
  style: "normal",
  preload: true,
  fallback: ["sans-serif"],
  subsets: ["latin"]
})

export const getStaticProps:GetStaticProps = async () => {
  const data = await getTranslationsByPage("about")
  const translations = data.map((translation) => {
    return {
      label: translation.properties.label.title[0].plain_text,
      value: translation.properties.value.rich_text[0].plain_text
    }
  })

  return {
    props: {
      translations
    },
  }
}

const About:NextPage<PageProps>= (props:PageProps) => {

  const { translations } = props

  return (
    <Fragment>
      <NextSeo
        title="About"
        description="About Ruth Cano"
        additionalLinkTags={[
          {
            rel: "preload",
            href: "/images/about.webp",
            as: "image",
          }
        ]}
      />
      <section className="w-full flex flex-col pt-[60px] self-stretch grow gap-4">
        <Message font={OoohBaby} translations={translations}/>
        <Description translations={translations} />
        <Tools/>
        <Skills/>
        <Languages/>
      </section>
    </Fragment>
  )
}

export default About