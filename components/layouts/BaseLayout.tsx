import { Fragment, ReactNode, type FC } from "react"
import { Header, Footer } from "../navigation"

type Props = {
  children: ReactNode
}

const BaseLayout:FC<Props> = ({children}:Props) => {
  return (
    <Fragment>
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