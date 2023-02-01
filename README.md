<div align="center">
  <a href="https://github.com/etherCorps/svedev">
    <img src="https://blog.ethercorps.io/icon.svg" alt="Logo" width="80" height="80">
  </a>
</div>

## SveDev

It's a blog template for the writer who writes on Dev.to and want to have their own blog website without to worry about tech stuff and if you want to customize it you can. We use Dev.to(Forem) Api to interact with SveDev's frontend which uses Svelte and SvelteKit.

[![SveDev](https://raw.githubusercontent.com/etherCorps/sveltekit-devto-blog/main/static/BlogTemplateImage.jpeg)](https://www.youtube.com/watch?v=lZ__u7B8v-c)

## Tech Stack

**Client:** Svelte, Tailwind, DaisyUI

**Server:** SvelteKit, Dev.to(Forum) Rest API

## Deployment

You can use one click deployment for Vercel and Netlify and for Linux and other deployment please check [How to use](#how-to-deploy) guide.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FetherCorps%2Fsveltekit-devto-blog&env=PUBLIC_APP_NAME,DEV_TO_API_KEY,PUBLIC_DEV_TO_USERNAME&envDescription=PUBLIC_APP_NAME%3A%20Means%20the%20name%20you%20wanna%20show%20on%20Navigation%20Header%2C%20DEV_TO_API_KEY%3A%20Means%20api%20key%20fronm%20devto%20plateform%20and%20PUBLIC_DEV_TO_USERNAME%3A%20Means%20your%20username%20on%20devTo%20&demo-title=Blog%20Template%20with%20Devto%20and%20Sveltekit&demo-description=A%20blog%20template%20which%20uses%20Devto%20as%20CMS%20and%20SvelteKit%20as%20UI%2FUX.&demo-url=https%3A%2F%2Fblog.ethercorps.io&demo-image=https%3A%2F%2Fblog.ethercorps.io%2FBlogTemplateImage.jpeg)

#### Demo

- Vercel - [Vercel Deploy Demo](https://svedev.vercel.app/) - One Click Deploy
- Netlify - [Netlify Deploy Demo](https://svedev.netlify.app/) - How To Deploy Guide

> When you use One Click Deploy You can't use meta icon so first change that and deploy it.

### How to Deploy

You can deploy SveDev to any platform using SvelteKit adapters. Some of them are made by community and some are officially by the Svelte team.

To deploy SveDev you have to add some environment variables in '.env' or in deployment specific plateform's environment values.

    1. PUBLIC_APP_NAME=EtherCorps // Your Blog name
    2. DEV_TO_API_KEY=sdfghjktfh // Your devto Api key
    3. PUBLIC_DEV_TO_USERNAME=theether0 // Your devto username

For adapters, you can read [SvelteKit Docs](https://kit.svelte.dev/docs/adapters) and according to that you can change your adapter in `svelte.config.js` file. Then build your app and deploy.

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?
