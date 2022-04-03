declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    SECRET: string;
    NEXTAUTH_URL: string;
    NEXT_PUBLIC_API_KEY: string;
    NEXT_PUBLIC_AUTH_DOMAIN: string;
    NEXT_PUBLIC_PROJECT_ID: string;
    NEXT_PUBLIC_STORAGE_BUCKET: string;
    NEXT_PUBLIC_MESSAGING_SENDER_ID: string;
    NEXT_PUBLIC_APP_ID: string;
  }
}
