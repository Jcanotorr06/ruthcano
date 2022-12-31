import { type FC } from "react"
import Link from "next/link"
import { BsInstagram, BsLinkedin, BsYoutube, BsArrowUpShort } from "react-icons/bs"

const Footer:FC = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="w-full flex flex-col border-t border-secondary-body">
      <section className="flex py-10 gap-[10px] w-full">

        <article className="flex flex-col py-3 grow">
          <div className="w-fit">
            <span className="ui-sm upper font-medium text-secondary-body">
              My Socials
            </span>
          </div>
          <div className="flex items-center py-3 gap-7 self-stretch text-secondary-body text-ui-lg lg:text-ui-2xl">
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="Youtube" className="transition-colors hover:text-red-600">
                <BsYoutube/>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="transition-colors hover:text-blue-500">
                <BsLinkedin/>
            </Link>
          </div>
        </article>

        <article className="flex items-end justify-end py-3 gap-8 grow self-stretch text-secondary-body">
          <div>
            <Link href="/about" className="text-secondary-body hover:text-surface">
              About
            </Link>
          </div>
          <div>
            <Link href="/work/all" className="text-secondary-body hover:text-surface">
              Work
            </Link>
          </div>
          <div>
            <Link href="/contact" className="text-secondary-body hover:text-surface">
              Contact
            </Link>
          </div>
        </article>
      </section>

      <section className="w-full flex-wrap flex items-center justify-between py-5 gap-[10px] text-secondary-body">
        <div className="w-fit">
          <small>
            Ruth Cano&apos;s Portfolio
          </small>
        </div>
        <div className="w-fit">
          <button className="ui-4xl font-medium  btn btn-link" onClick={scrollToTop}>
            <BsArrowUpShort/>
          </button>
        </div>
        <div className="w-fit">
          <small>
            &copy; {new Date().getFullYear()} - Designed & Developed by&nbsp;
            <Link className="text-surface" href="https://www.josephcano.com" target="_blank" rel="noopener noreferrer">
            Joseph Cano
            </Link>
          </small>
        </div>
      </section>
    </footer>
  )
}

export default Footer