---
title: Setting Up Netlify CMS with Gatsby
date: '2019-10-09'
path: /posts/setting-up-netlify-cms-with-gatsby
---
This site is built using Gatsby and deployed via Netlify. I recently setup my website to utilize Netlify's CMS to handle writing new blog posts (like this one). Netlify has a really [great guide](https://www.netlifycms.org/docs/gatsby/) for how to do this, but since there were a few areas that were either unclear or slightly different in my case, I wanted to ahead and write my procedure down in case anyone hits similar hurdles.

**Some helpful resources for setting up your site:**

* [**Gatsby Netlify CMS Example**](https://github.com/erquhart/gatsby-netlify-cms-example) - This is a great example project that sets up Gatsby to use Netlify CMS. I highly recommend referencing this if you run into trouble.
* [**Netlify CMS and Gatsby**](https://www.netlifycms.org/docs/gatsby/) - The official doc from Netlify CMS.

Note: Since this was setup on an existing site, I didn't need to go through the process of integrating Github and Netlify. If you are looking for help with that, Netlify provides [documentation](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/) on how to do that as well.

**So here we go. The basic steps for setting up an existing Gatsby site are:**

1. Install the necessary modules
2. Setup a static folder for Netlify CMS
3. Configure Netlify settings for your site
4. Test admin page is working
5. Setup Gatsby to serve blog posts
6. Configure Identity settings on Netlify/Github

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

### config.yml

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
  - name: "posts" # Used in routes, e.g., /admin/collections/posts    preview_path: "posts/{{slug}}"
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

There is a lot here, and plenty that could change for your specific site. Netlify has already put together detailed documentation on all of the possible config settings. Rather than redoing that here, please refer to [their guide](https://www.netlifycms.org/docs/configuration-options/) to understand what each option does.

One note I will make is that if you have already have existing blog posts, you need to be sure the options listed in `fields` match the format of the frontmatter in those posts. This will ensure everything works seamlessly with your site.

### index.js

Along with the config file, you'll need to create another file in the `admin` folder called 'index.js'. Add the line below and Netlify CMS should handle the rest.

```
import CMS from 'netlify-cms-app'
```

## Test Netlify Admin Page

Onec you have saved the files above, we should be ready to check if the admin page is working. 

```
http://localhost:8000/admin/
```

It should work while you are running `gatsby develop`, but I've seen grumblings about some people not being able to access the admin page from develop mode. In that case you can run `gatsby build` and then try to access the admin url, just remember to use the correct port.

Hopefully you see the login screen for the Netlify CMS admin page when you reach here. If not, check your error logs and go back through each step to make sure you didn't miss anything.

If you are seeing the admin page, then we need to go ahead and setup a few things in the Netlify UI to be able to login.

## Enable Authentication 

## Setting up Gatsby to Serve Blog Posts

Before going any further with Netlify, I want to talk about setting up Gatsby to serve blog posts. Depending on your site, you may already be setup for this. Either way, this is handy information especially if you are getting build errors when trying to publish posts. I highly recommend checking out [this barebones examle project](https://github.com/erquhart/gatsby-netlify-cms-example) as well to reference the Gatsby config.

**The important files:**

* **gatsby-node.js**
* **Blog template**

These are the two main files involved in taking blog posts and turning them into actual pages. You will also need some sort of transformer plugin to convert your content into html. In my case, I am saving my blog posts as markdown files, which requires the plugin `gatsby-transformer-remark`. To install that plugin, run the command below from the terminal in your project.

```
npm install --save gatsby-transformer-remark
```

For more information on setting up Gatsby to serve markdown files, check out their documentation [here](https://www.gatsbyjs.org/docs/adding-markdown-pages/) and [here](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/).

### Setting up a Blog Template

First let's create a new file to serve as a template for individual blog posts. If you are incorporating Netlify CMS into an existing site, as I was, this should already exist. In that case, it's more important to ensure Netlify CMS is configured to create files that match the required formatting.

If you are adding a new blog, you'll want to go ahead and create this template. First, create a new folder within your `src` folder called `templates`, and add a new file called `blogTemplate.js` within that folder.

Copy and paste the following to your code into that file and then you can setup the layout however you need to match your site.

```
import React from 'react';

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
```

### Configuring gatsby-node.js

Once you have created your blog template, we need to let gatsby-node.js know to use this template. when creating blog posts.

In order to do that, your gatsby-node.js should look something like the following. The important lines to note here are the path and name of your blog template as well as the frontmatter we query for. This should match the frontmatter you configured Netlify CMS to store.

```
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {},
      });
    });
  });
};
```

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
