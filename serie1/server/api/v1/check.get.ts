/// method: `get` | path: `/api/v1/check`

export default defineEventHandler((event) => {
  return {
    apiVersion: 1,
    status: "ok",
  };
});
