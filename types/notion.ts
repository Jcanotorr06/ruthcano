import { PartialUserObjectResponse, TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { TranslationsPages } from "./translations";
import { category, status } from "./work";

type Cover = {
    type: "external";
    external: {
        url: string;
    };
} | null | {
    type: "file";
    file: {
        url: string;
        expiry_time: string;
    };
} | null;

type Icon = {
    type: "emoji";
    emoji: string;
} |
{
    type: "external";
    external: {
        url: string;
    };
} |
{
    type: "file";
    file: {
        url: string;
        expiry_time: string;
    };
} | null

type Parent = {
    type: "database_id";
    database_id: string;
} | {
    type: "page_id";
    page_id: string;
} | {
    type: "block_id";
    block_id: string;
} | {
    type: "workspace";
    workspace: true;
};

type File = {
    "file": {
        "url": string;
        "expiry_time": string;
    };
    "name": string;
    "type": "file";
} | 
{
    "external": {
        "url": string;
    };
    "name": string;
    "type": "external";
}

type WorkProperties = {
    "Created": {
        "id": string;
        "type": "created_time";
        "created_time": string;
    },
    "Description": {
        "id": string;
        "type": "rich_text";
        "rich_text": Array<TextRichTextItemResponse>;
    },
    "Media": {
        "id": string;
        "type": "files";
        "files": Array<File>;
    },
    "Name": {
        "id": string;
        "type": "title";
        "title": Array<TextRichTextItemResponse>;
    },
    "category": {
        "id": string;
        "type": "select";
        "select": {
            "id": string;
            "color": "string";
            "name": category;
        };
    },
    "status": {
        "id": string;
        "type": "select";
        "select": {
            "id": string;
            "color": "string";
            "name": status;
        };
    }
};

type TranslationsProperties = {
    label: {
        id: string;
        type: "title";
        title: Array<TextRichTextItemResponse>;
    },
    page: {
        id: string;
        type: "select";
        select: {
            id: string;
            color: "string";
            name: TranslationsPages;
        };
    },
    value: {
        id: string;
        type: "rich_text";
        rich_text: Array<TextRichTextItemResponse>;
    }
}

export type WorkResponse = {
    archived: boolean;
    cover: Cover;
    created_by: PartialUserObjectResponse;
    created_time: string;
    icon: Icon;
    id: string;
    last_edited_by: PartialUserObjectResponse;
    last_edited_time: string;
    object: "string";
    parent: Parent
    properties: WorkProperties;
    url: string;
}

export type TranslationResponse = {
    archived: boolean;
    cover: Cover;
    created_by: PartialUserObjectResponse;
    created_time: string;
    icon: Icon;
    id: string;
    last_edited_by: PartialUserObjectResponse;
    last_edited_time: string;
    object: "string";
    parent: Parent;
    properties: TranslationsProperties;
    url: string;
}