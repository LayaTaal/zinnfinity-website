import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import BackgroundImage from 'gatsby-background-image'

const Contact  = (props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "watercolor_bg_w1000px.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const { title, subtitle } = props;
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <SectionContainer styles={{padding: '2rem'}} containerType='fixed-width'>
          <FlexBox>
            <ContactInformation>
              <SectionHeading title={title} subtitle={subtitle} styles={{marginBottom: '0'}} />
              <p>I love meeting new teams and individuals. If you think I might be a good fit, drop me a link and let’s start a conversation.</p>
            </ContactInformation>
            <ContactForm>
              <BackgroundImage
                Tag="section"
                fluid={imageData}
                backgroundColor={`#112b2f`}
              >
                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="field half first">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">What can I help you with?</label>
                    <textarea name="message" id="message" rows="6" />
                  </div>
                  <ul className="actions">
                    <li>
                      <input type="submit" value="Send Message" className="special" />
                    </li>
                  </ul>
                </form>
              </BackgroundImage>
            </ContactForm>
          </FlexBox>
        </SectionContainer>
      )
    }}
  />
  
)

export default Contact;

Contact.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

const FlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    flex-flow: row wrap;
  }
`;

const ContactInformation = styled.div`
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    width: 50%
  }
`;

const ContactForm = styled.div`
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    width: 50%
  }
`