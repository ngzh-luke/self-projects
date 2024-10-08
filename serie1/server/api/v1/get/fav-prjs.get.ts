/// method: `get` | path: `/api/v1/get/fav-prjs`
/// params: `limit`:number (int) -> limits the returning results where maximum return results amount will <= actual data

export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  return {
    metaData: {
      status: "ok",
      path: url.pathname,
      apiVersion: 1,
    },
    info: "ok",
  };
});
