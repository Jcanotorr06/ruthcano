import { type FC } from "react"
import { useRouter } from 'next/router';

const CTA:FC = () => {

  const router = useRouter()

  const handleContactMe = () => {
    router.push("/contact")
  }

  return (
    <section className="flex flex-col justify-center items py-24 gap-[10px] w-full">
      <article className="flex py-11 gap-[10px]">
        <div className="w-full text-center flex flex-col gap-4">
          <h2 className="ui-xl lg:ui-3xl xl:ui-4xl upper font-semibold text-center justify-center items-center text-surface">
          If you would like to know more about my work
          or talk about a project
          check out my social media links
          or feel free to fill out the contact form.
          </h2>
          <button 
            onClick={handleContactMe}
            className="ui-sm self-center lg:ui-xl upper w-fit font-semibold text-center btn hover:underline rounded-full px-12"
          >
            Contact Me
          </button>
        </div>
      </article>
    </section>
  )
}

export default CTA