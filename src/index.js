// This is the entry point for the Cloudflare Worker

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle API requests
    if (url.pathname.startsWith('/api/')) {
      // For now, we'll return a simple response
      // In production, you would proxy these requests to your backend API
      return handleApiRequest(request, url);
    }
    
    // For static assets and other requests, let Cloudflare handle them
    try {
      // Try to serve a static asset from the site
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If the asset doesn't exist, return the index.html for client-side routing
      return await env.ASSETS.fetch(`${url.origin}/index.html`);
    }
  },
};

/**
 * Handle API requests
 * @param {Request} request - The original request
 * @param {URL} url - The parsed URL
 * @returns {Response} - The API response
 */
async function handleApiRequest(request, url) {
  // Extract the API path (remove /api/ prefix)
  const apiPath = url.pathname.replace(/^\/api\//, '');
  
  // Example API endpoints
  if (apiPath === 'health') {
    return new Response(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  if (apiPath === 'version') {
    return new Response(JSON.stringify({ version: '1.0.0', environment: 'production' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  // For all other API requests, you would typically proxy to your backend
  // For now, return a 404 response
  return new Response(JSON.stringify({ error: 'Not Found', path: apiPath }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
} 