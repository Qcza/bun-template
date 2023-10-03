import { routing } from "./routing.ts";
import { error } from "./handlers/error.ts";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  error,
  fetch: routing,
});

console.log(`Server is listening on port ${server.port}`);
