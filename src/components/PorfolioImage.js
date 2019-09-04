import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

function renderImage(file) {
  return (
    <React.Fragment>
      <Img fixed={file.node.childImageSharp.fixed} />
    </React.Fragment>
  )
}

const PortfolioImage = function (props) {

  return <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    `}
    render={(data) => {
      const image = data.images.edges.find(
        image => image.node.relativePath === props.src
      )
      return(renderImage(image))
    }}
  />
}

export default PortfolioImage;