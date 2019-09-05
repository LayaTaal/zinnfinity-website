import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout pageTitle="Page Not Found">
    <SEO title="404: Not found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
