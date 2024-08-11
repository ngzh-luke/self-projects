// log all the request sent to server

export default defineEventHandler((event) => {
  console.log("request: " + getRequestURL(event));
});
