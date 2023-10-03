import { Routes } from "./routes";
import { root } from "./routes/root.ts";
import { isStatic, statics } from "./handlers/statics.ts";

export const routing = (req: Request): Response | Promise<Response> => {
  const url = new URL(req.url);
  if (isStatic(url)) {
    return statics(req);
  }

  switch (url.pathname) {
    case Routes.ROOT: {
      return root();
    }
    default: {
      return new Response("404", { status: 404 });
    }
  }
};
