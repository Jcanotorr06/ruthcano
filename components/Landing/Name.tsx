import Link from "next/link"
import { FC } from "react"
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Name:FC = () => {
    return (
    <section className="flex flex-col items-end w-full select-none">
        <article className="w-fit">
          <h1 className="ui-9xl lg:ui-16xl upper font-semibold">Ruth</h1>
        </article>
        <article className="flex flex-col lg:flex-row self-stretch lg:justify-end lg:items-end lg:gap-6">
            <div className="flex grow order-3 lg:order-none text-secondary-body gap-[60px] py-[10px] text-lg lg:text-[32px]">
                <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red-600">
                    <BsYoutube/>
                </Link>
                <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-500">
                    <BsLinkedin/>
                </Link>
            </div>
            <div className="w-fit order-1 lg:order-none">
                <h1 className="ui-9xl lg:ui-16xl upper font-semibold">Cano</h1>
            </div>
            <div className="flex flex-col items-start gap-4 lg:gap-[88px] order-2 lg:order-none">
                <div className="w-full lg:w-fit">
                    <h5 className="ui-xl font-medium text-secondary-body hidden lg:block">
                        Digital content<br className="hidden lg:block"/>
                        creator
                    </h5>
                    <h5 className="ui-xl font-medium text-secondary-body block lg:hidden">
                        Digital content creator
                    </h5>
                </div>
                <div aria-hidden></div>
            </div>
        </article>
    </section>
    )
}

export default Name