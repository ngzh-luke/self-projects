/// method: `get` | path: `/@admin/api/v1/check`

export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  return {
    metaData: {
      status: "ok",
      path: url.pathname,
      apiVersion: 1,
    },
  };
});
