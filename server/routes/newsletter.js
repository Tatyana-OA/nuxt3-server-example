export default defineEventHandler((event) => {
  return sendRedirect(event, "/news", 302);
});
