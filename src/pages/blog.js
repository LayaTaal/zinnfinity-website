import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import Layout from "../components/LayoutPage"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog Covering Web Design and Development"
        description="A blog on website design and development with tips and guides for businesses, organizations, and individuals interested in building quality websites."
      />
      <h1>Zinnfinity Blog</h1>
      <Primary>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <header className="blog-feed-header">
              <h2 className="blog-feed-header__title">
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </h2>
              <span className="blog-feed-header__date">
                {node.frontmatter.date}
              </span>
            </header>
            <p>
              <Link to={node.frontmatter.path}>{node.excerpt}</Link>
            </p>
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
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date], 
        order: DESC
      }, 
      filter: {
        frontmatter: {tag: {eq: "blog"}}
      }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
  
`
