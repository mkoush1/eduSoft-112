# EduSoft Cloudflare Deployment

This document provides instructions for deploying the EduSoft application to Cloudflare Workers.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Cloudflare account
- Wrangler CLI (`npm install -g wrangler`)

## Deployment Steps

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

## Configuration

The deployment configuration is defined in `wrangler.toml`. Key settings include:

- `name`: The name of your Worker
- `compatibility_date`: The compatibility date for your Worker
- `main`: The entry point for your Worker
- `site.bucket`: The directory containing your built frontend assets
- `build.command`: The command to build your frontend
- `vars`: Environment variables for your Worker

## Environment Variables

The following environment variables are used in the application:

- `VITE_REACT_APP_BACKEND_BASEURL`: The URL of your backend API

## Troubleshooting

If you encounter issues during deployment:

1. Check the Wrangler logs: `wrangler tail`
2. Ensure your Cloudflare account has the necessary permissions
3. Verify that the build process completes successfully
4. Check that the `wrangler.toml` file is correctly configured 