import pug from "pug";

export const root = (): Response => {
  return new Response(
    pug.renderFile("./views/root.pug", { engineName: "Pug" }),
    {
      headers: {
        "Content-Type": "text/html",
      },
    },
  );
};
