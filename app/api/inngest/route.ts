import { serve } from "inngest/next";
import { inngest, syncUserCreation } from "@/config/client";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation],
});
