declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    PORT: string;
    NEXT_PUBLIC_API_URL: string;
    NOTION_TOKEN: string;
    TRANSLATIONS_DB_ID: string;
    WORK_DB_ID: string;
    REVALIDATION_SECRET: string;
    EMAIL_AUTH_USER: string;
    EMAIL_AUTH_PASS: string;
    EMAIL_HOST: string;
    EMAIL_PORT: number;
    EMAIL_CONTACT_TO: string;
  }
}