import React, { FC, Fragment } from "react"
import { Translation } from "../../types/translations"

type Props = {
    translations: Translation[]
}

const Description:FC<Props> = (props:Props) => {

    const { translations } = props

    const description = translations.find((translation) => translation.label === "about_me")

    return (
        <article className="w-full py-4 z-10">
            <p data-translate="about_me" className="ui-xs lg:ui-lg">
                {
                    description ? 
                        description.value.split("\n").map((item, key) => (
                            <Fragment key={key}>
                                {item}
                                <br/>
                                <br/>
                            </Fragment>
                        ))
                    : 
                        "about_me"
                }
            </p>
        </article>
    )
}

export default Description