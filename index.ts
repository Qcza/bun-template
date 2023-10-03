import { routing } from "./routing.ts";
import { error } from "./handlers/error.ts";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch: routing,
  error,
});

console.log(`Server is listening on port ${server.port}`);
