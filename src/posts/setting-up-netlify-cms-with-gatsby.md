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
2. Setup a static folder for Netlify CMS
3. Configure Netlify settings for your site
4. Test admin page is working
5. Configure Identity settings on Netlify/Github

## Installing the Necessary Modules

First we need to install a couple of modules to make this all work. The two we need are netlify-cms-app and gatsby-plugin-netlify-cms. You can install both by running the command below in the terminal from the project directory:

```
npm install --save netlify-cms-app gatsby-plugin-netlify-cms
```

While those are downloading, you can go ahead and add gatsby-plugin-netlify-cms to gatsby-config.js:

```
plugins: [
  'gatsby-plugin-netlify-cms',
]
```

## Setup a Static Folder for Netlify CMS

Up until this point everything in the official documentation from Netlify was clear, but I was a little confused on exactly where to place the files required for Netlify CMS. The docs state that Gatsby sites must place the CMS files into the `static` folder. 

You'll need to create this folder at the root of your project, alongside the `public` folder and `src`. Within the new `static` folder, create another folder called `admin`. Your directory structure should now look similar to what I have below.

```
|-- public
|-- src
|-- static
    |-- admin
```

## Configure Netlify settings for your site

Ok, great! Now we are going to add two files within our newly created `admin` folder. These will be the configuration and landing page for the CMS.

First, create a new file called `config.yml` within the admin folder. There is a ton of variation in how the config file needs to be setup depending on your specific site, but i will go over the basic setup. You can look over all of the config options [here](https://www.netlifycms.org/docs/configuration-options/).

Copy and paste the code below into your config.yml file.

```
backend:
  name: git-gateway
  branch: master # Branch to update (optional; defaults to master)

publish_mode: editorial_workflow

media_folder: "static/images/uploads" # Media files will be stored in the repo under images/uploads

public_folder: "/images/uploads" # The src attribute for uploaded media will begin with /images/uploads

collections:
  - name: "posts" # Used in routes, e.g., /admin/collections/blog
    label: "Post" # Used in the UI
    folder: "src/posts" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    slug: "{{slug}}" # Filename template, e.g., title.md
    fields: # The fields for each document, usually in front matter
      - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Featured Image", name: "thumbnail", widget: "image", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
```

There is a lot here, so let's go over it a bit, starting from the top.

**backend -** This is required to work and ensures that content created both locally and on your live site matches. Whenever you publish a new post, Netlify adds that as a new commit on the specific branch.

**publish_mode -** This is an optional field, but I think a useful one. Adding the editorial workflow allows you to create and save drafts and sets up a new section in your CMS admin entitled "Workflow".

**media_folder -** This setting is required and specifies the folder where uploaded files should be saved. The path is relative to the root of your project.

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
