# Deployment Guide

This document provides instructions for deploying the application to production.

## Environment Variables

The application uses environment variables for configuration. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

### Required Variables

- `VITE_WEBHOOK_URL` (Optional): URL for form submission webhook

## Build Process

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally.

## Code Quality

### Linting

```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Automatically fix linting errors
```

### Formatting

```bash
npm run format        # Format all files
npm run format:check  # Check formatting without making changes
```

## Deployment Platforms

### Vercel (Recommended)

The application is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

Configuration is already set up in `vercel.json`.

### Netlify

The application can also be deployed to Netlify:

1. Connect your repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables in Netlify dashboard

Configuration is already set up in `netlify.toml`.

### Other Platforms

The application can be deployed to any static hosting platform:

1. Run `npm run build`
2. Upload the contents of the `dist` directory
3. Configure environment variables as needed

## Security Considerations

- Content Security Policy is configured in `index.html`
- Rate limiting is implemented for form submissions
- Honeypot field protects against spam
- GDPR compliance elements are included

## Post-Deployment Checklist

- [ ] Verify environment variables are set correctly
- [ ] Test form submission functionality
- [ ] Verify analytics tracking
- [ ] Check CSP headers are working
- [ ] Test multi-language support
- [ ] Verify SEO meta tags and sitemap
- [ ] Test on mobile devices
- [ ] Check performance metrics
