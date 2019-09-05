import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesSection from '../components/Services'
import PortfolioSection from '../components/Portfolio'
import ContactSection from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ServicesSection title="Set your business apart with an unique online experience" subtitle="What I Do" />
    <PortfolioSection title="Who I am working with" />
    <ContactSection title="Have a project you’d like to discuss?" subtitle="Let's Talk" />
  </Layout>
)

export default IndexPage
