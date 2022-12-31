import { GetServerSideProps, GetStaticPaths, GetStaticProps, type NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import { Fragment, useState } from "react"
import { NextSeo } from "next-seo";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Link from "next/link";
import { getAllWork, getWorkByCategory } from "../../lib/notion"
import { WorkResponse } from "../../types/notion"
import { Card, Modal } from "../../components/Work";

type IParams = {
    category: "all" | "videography" | "photography" | "designs"
} & ParsedUrlQuery

type PageProps = {
    data: WorkResponse[],
    category: IParams["category"]
}

/* export const getStaticPaths:GetStaticPaths = async () => {
    return {
        paths: [
            { params: { category: "all" } },
            { params: { category: "videography" } },
            { params: { category: "photography" } },
            { params: { category: "designs" } },
        ],
        fallback: false
    }
} */

export const getServerSideProps:GetServerSideProps = async (context) => {
    const { category } = context.params as IParams
    const data = category  === "all" ? await getAllWork() : await getWorkByCategory(category)
    /* console.log("GET STATIC PROPS") */
    const props:PageProps = {
        data,
        category
    }
    return {
        props:props,
        /* revalidate: 600 */
    }
}

const WorkGallery:NextPage<PageProps> = (props:PageProps) => {
    const { data, category } = props
    const [selected, setSelected] = useState<WorkResponse|null>(null)

    const selectNext = () => {
        const index = data.findIndex(page => page.id === selected?.id)
        if (index === data.length - 1) {
            setSelected(data[0])
        } else {
            setSelected(data[index + 1])
        }
    }

    const selectPrev = () => {
        const index = data.findIndex(page => page.id === selected?.id)
        if (index === 0) {
            setSelected(data[data.length - 1])
        } else {
            setSelected(data[index - 1])
        }
    }

    const categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1)

    return (
        <Fragment>
            <NextSeo
                title={category === "all" ? "All Work" : categoryCapitalized}
            />
            <section className="w-full p-4 flex flex-col gap-4">
                <article className="w-full flex gap-4 text-secondary-body">
                    <Link href="/work/all" className={`hover:text-surface hover:underline ${category === "all" ? "text-surface underline font-semibold" : ""}`}>
                        All
                    </Link>
                    <Link href="/work/videography" className={`hover:text-surface hover:underline ${category === "videography" ? "text-surface underline font-semibold" : ""}`}>
                        Videography
                    </Link>
                    <Link href="/work/photography" className={`hover:text-surface hover:underline ${category === "photography" ? "text-surface underline font-semibold" : ""}`}>
                        Photography
                    </Link>
                    <Link href="/work/designs" className={`hover:text-surface hover:underline ${category === "designs" ? "text-surface underline font-semibold" : ""}`}>
                        Designs
                    </Link>
                </article>
                {
                    data.length === 0 ? 
                    <div className="w-full flex justify-center items-center">
                        <h1 className="text-2xl text-secondary-body">No Work Found</h1>
                    </div> :
                    <ResponsiveMasonry 
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                    >
                        <Masonry
                            gutter="1rem"
                        >
                            {data.map((page, i) =>
                                <Card key={page.id} page={page} index={i} setSelected={setSelected}/>
                            )}
                        </Masonry>
                    </ResponsiveMasonry>
                }
            </section>
            <Modal 
                setSelected={setSelected} 
                page={selected}
                selectNext={selectNext}
                selectPrev={selectPrev}
            />
        </Fragment>
    )
}


export default WorkGallery