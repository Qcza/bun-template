import { type Errorlike } from "bun";

export const error = (error: Errorlike): Response =>
  new Response(`<pre>${error}\n${error.stack}</pre>`, {
    headers: {
      "Content-Type": "text/html",
    },
  });
