import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import SEO from '../components/seo'
import theme from '../../theme'
import '../components/layout.css'
import Header from '../components/HeaderPage'
import Footer from '../components/Footer'

const Layout = ({ data }) => {
  console.log(data)
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Header />
          <SEO title={`${frontmatter.title} | Zinnfinity Web Services`} />
          <Main>
            <header className="blog-feed-header">
              <h1 className="blog-feed-header__title">{frontmatter.title}</h1>
              <span className="blog-feed-header__date">{frontmatter.date}</span>
            </header>
            <Article
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Main>
          <Footer />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  data: PropTypes.object,
}

export default Layout

const Main = styled.main`
  max-width: ${props => props.theme.breakpoints.small};
  margin: 0 auto;
  padding: 6rem 2rem 4rem 2rem;

  .blog-feed-header {
    margin-bottom: 1.4rem;
  }
  .blog-feed-header__title {
    margin-bottom: 0;
  }
  .blog-feed-header__date {
    font-size: ${props => props.theme.typography.fontSize__small};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    padding: 6rem 0;
  }
`

const Article = styled.article`
  margin: 2rem 0;
`
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
