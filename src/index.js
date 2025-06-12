// This is the entry point for the Cloudflare Worker

export default {
  async fetch(request, env, ctx) {
    // This is where you can handle API requests if needed
    // For a static site, we'll just let the static assets be served automatically
    return new Response("EduSoft API is running!", {
      headers: { "content-type": "text/plain" },
    });
  },
}; 