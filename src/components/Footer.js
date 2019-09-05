import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import Logo from './Logo'
import Divider from './Divider'

function Footer() {
  return (
    <FooterContainer id="footer">
      <FlexBox>
        <div className="footer-col first-col">
          <Logo />
        </div>
        <div className="footer-col last-col">
          <ul>
            <li>
              <Link to="/" activeClassName="active-page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" activeClassName="active-page">
                Blog
              </Link>
            </li>
            <li className="empty" />
            <li>
              <Link to="#contact" activeClassName="active-page">
                Contact
              </Link>
            </li>
            <li>info@zinnfinity.com</li>
            <li>
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
            </li>
          </ul>
        </div>
      </FlexBox>
      <Divider customStyles={{ margin: '2.8rem 0', background: '#666666' }} />
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
  padding: 4rem 2rem;

  .copyright {
    display: block;
    text-align: center;
    font-size: ${props => props.theme.typography.fontSize__small};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    padding: 2rem;

    .copyright {
      text-align: right;
    }
  }
`

const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  .first-col {
    width: 150px;
    text-align: left;
  }
  .last-col {
    width: 50%;
    text-align: right;
  }

  ul {
    list-style: none;
    margin-left: 0;

    li {
      margin: 0;
      font-size: ${props => props.theme.typography.fontSize__small};

      &.empty {
        height: 1.6rem;
      }

      a {
        color: ${props => props.theme.colors.blue};
        text-decoration: none;
        font-size: 1rem;
      }
    }
  }

  .social-icon-container {
    margin-top: 0.5rem;

    .social-icon {
      margin-left: 0.5rem;
      color: ${props => props.theme.colors.white};
      transition: 0.3s color ease-out;

      :hover {
        color: ${props => props.theme.colors.blue};
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    .first-col {
      width: 200;
    }
  }
`
