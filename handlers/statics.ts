export const isStatic = (url: URL) =>
  !!url.pathname.match(/\/.+\.[aA-zZ]{2,}$/);

export const statics = (req: Request): Response => {
  const filePath = new URL(req.url).pathname;
  return new Response(Bun.file("./public" + filePath));
};
