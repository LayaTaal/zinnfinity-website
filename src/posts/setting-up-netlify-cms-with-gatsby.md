---
layout: blog
title: Setting up Netlify CMS with Gatsby
date: 2019-10-01T16:39:58.095Z
---
## Steps

1. Install necessary modules
2. Setup static folder
3. Configure Netlify settings for your site
4. Test admin page is working
5. Configure Identity settings on Netlify/Github

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
