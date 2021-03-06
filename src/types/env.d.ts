declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    SECRET: string;
    NEXTAUTH_URL: string;
    MONGODB_URI: string;
  }
}
