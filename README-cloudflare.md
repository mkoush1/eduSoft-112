# EduSoft Cloudflare Deployment Guide

This document provides comprehensive instructions for deploying the EduSoft application to Cloudflare Workers and Pages.

## Deployment Options

EduSoft can be deployed to Cloudflare in two ways:

1. **Cloudflare Workers** - For full-stack applications with custom server-side logic
2. **Cloudflare Pages** - For static frontend with API redirects to a separate backend

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Cloudflare account
- Wrangler CLI (`npm install -g wrangler`)

## Configuration Files

The repository includes several configuration files for Cloudflare deployment:

- `wrangler.toml` - Main configuration for Cloudflare Workers
- `.cloudflare/pages.json` - Configuration for Cloudflare Pages
- `frontend/public/_headers` - HTTP headers for Cloudflare Pages
- `frontend/public/_redirects` - URL redirects for Cloudflare Pages
- `src/index.js` - Worker script for handling requests

## Deployment Steps

### Option 1: Deploy to Cloudflare Workers (Full Stack)

1. **Login to Cloudflare**

   ```bash
   npx wrangler login
   ```

2. **Build the frontend**

   ```bash
   npm run build
   ```

3. **Deploy to Cloudflare Workers**

   ```bash
   npm run deploy
   ```

4. **Configure Custom Domain (Optional)**

   In the Cloudflare Dashboard:
   - Go to Workers & Pages
   - Select your worker
   - Click "Custom Domains"
   - Follow the instructions to add your domain

### Option 2: Deploy to Cloudflare Pages (Frontend Only)

1. **Login to Cloudflare**

   ```bash
   npx wrangler login
   ```

2. **Build the frontend**

   ```bash
   npm run build
   ```

3. **Deploy to Cloudflare Pages**

   ```bash
   npm run deploy:pages
   ```

4. **Configure Environment Variables**

   In the Cloudflare Dashboard:
   - Go to Workers & Pages
   - Select your Pages project
   - Go to Settings > Environment variables
   - Add `VITE_REACT_APP_BACKEND_BASEURL` with your backend URL

## Environment Variables

The following environment variables should be configured in Cloudflare:

- `VITE_REACT_APP_BACKEND_BASEURL`: URL of your backend API

## Continuous Deployment

You can set up continuous deployment from GitHub:

1. In the Cloudflare Dashboard, go to Workers & Pages
2. Click "Create Application" > "Pages"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `frontend/dist`
   - Environment variables: Add `VITE_REACT_APP_BACKEND_BASEURL`

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all dependencies are correctly installed
   - Verify that the build command is correct
   - Check for any environment variables that might be missing

2. **API Connection Issues**
   - Verify that `VITE_REACT_APP_BACKEND_BASEURL` is correctly set
   - Check CORS configuration on your backend
   - Verify the redirects in `_redirects` file

3. **Worker Errors**
   - Check the worker logs: `wrangler tail`
   - Verify that the `wrangler.toml` configuration is correct
   - Make sure the worker script handles routes correctly

### Debugging

To view logs from your deployed worker:

```bash
npx wrangler tail
```

To test your worker locally before deployment:

```bash
npm run start
```

## Performance Optimization

1. **Caching**
   - The `Cache-Control` headers are set in `_headers` for static assets
   - Consider implementing additional caching in the worker script for API responses

2. **Edge Functions**
   - Use Cloudflare Workers for computationally intensive tasks
   - Implement edge caching for frequently accessed data

3. **Image Optimization**
   - Use Cloudflare's Image Resizing service for dynamic image optimization
   - Preload critical images in your application

## Security Best Practices

1. **Headers**
   - Security headers are configured in `_headers`
   - Content Security Policy is set to restrict resource loading

2. **Authentication**
   - Store JWT tokens securely in localStorage or cookies
   - Implement proper token refresh mechanisms

3. **API Protection**
   - Use Cloudflare Access for additional API protection
   - Implement rate limiting for API endpoints

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/) 