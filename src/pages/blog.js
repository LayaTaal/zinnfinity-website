import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Layout from '../components/LayoutPage'
import SEO from '../components/seo'

const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Interesting tidbits and findings in web development | Zinnfinity Web Services" />
      <h1>Zinnfinity Blog</h1>
      <Primary>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <header className="blog-feed-header">
              <h2 className="blog-feed-header__title">
                {node.frontmatter.title}
              </h2>
              <span className="blog-feed-header__date">
                {node.frontmatter.date}
              </span>
            </header>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </Primary>
    </Layout>
  )
}

export default Blog

Blog.propTypes = {
  data: PropTypes.object,
}

const Primary = styled.div`
  .blog-feed-header {
    margin-bottom: 1.4rem;
  }
  .blog-feed-header__title {
    margin-bottom: 0;
  }
  .blog-feed-header__date {
    font-size: ${props => props.theme.typography.fontSize__small};
  }
`

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
