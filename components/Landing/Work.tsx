import Link from "next/link"
import { type FC } from "react"

const Work:FC = () => {
  return (
    <section className="flex flex-col self-stretch w-full py-[60px] gap-[10px]">
        <article className="w-fit">
            <h2 className="ui-5xl lg:ui-7xl font-semibold text-surface">
                Portfolio
            </h2>
            <h5 className="ui-xl lg:ui-2xl font-medium text-secondary-body">
                Check out my work!
            </h5>
        </article>
        <article className="grid grid-cols-2 gap-[10px]">
            <Link href="/work/videography" className="flex items-end justify-end p-4 col-span-2 h-96 videography-card hover:underline">
                <div className="text-ui-lg font-medium">
                    Videography
                </div>
            </Link>
            <Link href="/work/photography" className="flex items-end justify-end p-4 col-span-2 lg:col-span-1 h-96 photography-card hover:underline">
                <div className="text-ui-lg font-medium">
                    Photography
                </div>
            </Link>
            <Link href="/work/designs" className="flex items-end justify-end p-4 col-span-2 lg:col-span-1 h-96 designs-card hover:underline">
                <div className="text-ui-lg font-medium">
                    Designs
                </div>
            </Link>
        </article>
    </section>
  )
}

export default Work