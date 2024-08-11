/// method: `get` | path: `/@admin/check`

export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  return {
    metaData: {
      status: "ok",
      path: url.pathname,
    },
  };
});
