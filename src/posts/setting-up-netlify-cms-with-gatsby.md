---
layout: blog
title: Setting up a Blog using Netlify CMS and Gatsby
date: 2019-10-01T16:39:58.095Z
---
This site is built ousing Gatsby and deployed via Netlify. I recently setup my website to utilize Netlify's CMS to handle writing new blog posts (like this one). Netlify has a really [great guide](https://www.netlifycms.org/docs/gatsby/) for how to do this, but since there were a few areas that were either unclear or slightly different in my case, I wanted to ahead and write my procedure down in case anyone hits similar hurdles.

Note: Since this was setup on an existing site, I didn't need to go through the process of integrating Github and Netlify. If you are looking for help with that, Netlify provides [documentation](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/) on how to do that as well.

## What's Involved

So here we go. The basic steps for setting up an existing Gatsby site are:

1. Install the necessary modules
2. Setup a folder to host Netlify CMS
3. Configure Netlify settings for your site
4. Test admin page is working
5. Configure Identity settings on Netlify/Github



## Installing the Necessary Modules

First we need to install a couple of modules to make this all work. The two we need are netlify-cms-app and gatsby-plugin-netlify-cms. You can install both by running the command below in the terminal from the project directory:

`npm install --save netlify-cms-app gatsby-plugin-netlify-cms`

O

## Gotchas

* Error Message when trying to login:
  * What it means: You need to invite the email (from Netlify)

## Useful Tidbits

* Editorial Workflow
* Changing CMS index path
  * ```
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
      modulePath: `${__dirname}/static/admin/index.js`,
      },
    },
    ```
* Setting requirement in collection fields
