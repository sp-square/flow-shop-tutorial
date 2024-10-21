import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod"; // we use zod to validate our environment variables

export const env = createEnv({
  server: {}, // object to hold our server environment variables
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(), // it checks that NEXT_PUBLIC_BASE_URL exists and is the string that looks like a url. If it doesn't exist our app will throw an error
    NEXT_PUBLIC_WIX_CLIENT_ID: z.string().min(1), // it checks that NEXT_PUBLIC_WIX_CLIENT_ID exists and is the string with at least one character. If it doesn't exist our app will throw an error
  }, // object to hold our client environment variables
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_WIX_CLIENT_ID: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
  }, // this object will check at runtime that our environment variables exist
});
