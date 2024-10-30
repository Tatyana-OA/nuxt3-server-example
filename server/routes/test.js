// If there's a page at test and a route at test, the server route will render first.

export default defineEventHandler((event) => {
  return "Test Server Route";
});
