declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      APP_ID: string;
      API_URL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
