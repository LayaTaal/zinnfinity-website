import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesSection from '../components/Services'
import PortfolioSection from '../components/Portfolio'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ServicesSection title='Set your business apart with an unique online experience' subtitle='What I Do' />
    <PortfolioSection title='Who I am working with' subtitle='I’m proud to be a part of helping some great businesses and organizations grow and flourish.' />
  </Layout>
)

export default IndexPage
