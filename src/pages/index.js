import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesSection from '../components/Services'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ServicesSection title='Set your business apart with an unique online experience' subtitle='What I Do' />
  </Layout>
)

export default IndexPage
