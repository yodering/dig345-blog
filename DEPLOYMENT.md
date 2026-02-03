# Deployment Guide - Netlify

This guide will walk you through deploying your Astro blog to Netlify.

## Prerequisites

1. A GitHub account
2. A Netlify account (free tier is sufficient)
3. Your Astro blog committed to a Git repository

## Method 1: Deploy via Netlify UI (Recommended for Beginners)

### Step 1: Push your code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Astro blog site"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin master
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and log in
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your blog repository

### Step 3: Configure Build Settings

Netlify should auto-detect Astro and configure these settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20 (set in netlify.toml)

If not auto-detected, enter these manually.

### Step 4: Deploy

1. Click "Deploy site"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at a URL like `random-name-123.netlify.app`

### Step 5: Custom Domain (Optional)

1. In your site settings, go to "Domain management"
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify for your project
netlify init

# Deploy to production
netlify deploy --prod
```

## Continuous Deployment

Once connected to GitHub, Netlify will automatically:

- Deploy on every push to your main/master branch
- Create preview deploys for pull requests
- Run your build command and deploy the result

## Build Configuration

The `netlify.toml` file in your project root configures:

- Build command and output directory
- Node.js version
- HTTP headers for security and caching
- Redirect rules

## Environment Variables

If you need environment variables:

1. Go to Site settings → Build & deploy → Environment
2. Click "Add environment variable"
3. Add your key-value pairs

Access in your Astro code via `import.meta.env.VARIABLE_NAME`

## Troubleshooting

### Build Fails

- Check the build log in Netlify for errors
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### 404 Errors

- Ensure `publish` directory is set to `dist`
- Check that `npm run build` works locally
- Review redirect rules in `netlify.toml`

### Slow Builds

- Enable build cache in Netlify settings
- Consider using Netlify's Build Plugins
- Optimize image sizes before committing

## Additional Resources

- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/netlify/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Build Configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)

## Next Steps

After deploying:

1. Update the site URL in `astro.config.mjs`
2. Test all pages and functionality
3. Set up custom domain (optional)
4. Configure analytics (optional)
5. Add your deployment URL to your DevLog!

Happy deploying! 🚀
