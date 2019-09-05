import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import Logo from './Logo'

function Footer() {
  return (
    <FooterContainer id="footer">
      <FlexBox>
        <div className="footer-col first-col">
          <Logo />
        </div>
        <div className="footer-col">
          <Link to="/index" activeClassName="active-page">
            Home
          </Link>
        </div>
        <div className="footer-col">
          <Link to="/blog" activeClassName="active-page">
            Blog
          </Link>
        </div>
        <div className="footer-col last-col">
          <Link to="#contact" activeClassName="active-page">
            Contact
          </Link>
          <a href="mailto:info@zinnfinity.com">info@zinnfinity.com</a>
          <div className="social-icon-container">
            <a href="https://twitter.com/taal25">
              <FaTwitterSquare className="social-icon" />
            </a>
            <a href="https://github.com/LayaTaal/">
              <FaGithubSquare className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/jason-zinn-ab93a2141">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </FlexBox>
      <div className="divider" />
      <span className="copyright">
        © {new Date().getFullYear()} Zinnfinity Web Services. All rights
        reserved.
      </span>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
`

const FlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 100%;
  max-width: ${props => props.theme.breakpoints.large};
  margin: 0 auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    flex-flow: row wrap;

    .footer-col {
      width: 25%;
    }
  }
`
