import { Client } from "@notionhq/client"
import { TranslationResponse, WorkResponse } from "../types/notion"
import { TranslationsPages } from "../types/translations"

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

export const getAllTranslations = async() => {
    const database_id = process.env.TRANSLATIONS_DB_ID
    const response = await notion.databases.query({
        database_id
    })
    return response.results
}

export const getTranslationsByPage = async(page:TranslationsPages) => {
    const database_id = process.env.TRANSLATIONS_DB_ID
    const response = await notion.databases.query({
        database_id,
        filter: {
            property: "page",
            select: {
                equals: page
            }
        }
    })
    return response.results as unknown as TranslationResponse[]
}

export const getAllWork = async() => {
    const database_id = process.env.WORK_DB_ID
    const response = await notion.databases.query({
        database_id,
        filter: {
            property: "status",
            select: {
                equals: "Live"
            }
        }
    })
    return response.results as unknown as WorkResponse[]
}

export const getWorkByCategory = async(category: string) => {
    const database_id = process.env.WORK_DB_ID
    const response = await notion.databases.query({
        database_id,
        filter: {
            and: [
                {
                    property: "status",
                    select: {
                        equals: "Live"
                    }
                },
                {
                    property: "category",
                    select: {
                        equals: category
                    }
                }
            ]
        }
    })
    return response.results as unknown as WorkResponse[]
}