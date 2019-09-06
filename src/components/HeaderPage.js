import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import SVGLogo from '../images/zinnfinity_logo.svg'

function Header() {
  return (
    <React.Fragment>
      <HeaderWrap>
        <LogoWrapper className="header-logo">
          <img
            src={SVGLogo}
            alt="Zinnfinity Web Services - Web design and development in Houston, TX"
          />
        </LogoWrapper>
        <div className="container">
          <Navbar>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
            </ul>
          </Navbar>
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
      </HeaderWrap>
    </React.Fragment>
  )
}

export default Header

const HeaderWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 2rem;
  background: ${props => props.theme.colors.black};
  width: 100%;
  height: 80px;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    height: 110px;
  }

  .header-logo {
    width: 65px;

    @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
      width: 100px;
    }
  }

  .container {
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0.5rem 0 0.5rem 2rem;
    max-width: ${props => props.theme.breakpoints.medium};

    .social-icon-container {
      .social-icon {
        height: 1rem;
        margin-top: 3px;
        margin-left: 0.5rem;
        color: ${props => props.theme.colors.white};
        transition: 0.3s color ease-out;

        :hover {
          color: ${props => props.theme.colors.blue};
        }
      }
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
      padding: 2rem 4rem;

      .social-icon-container {
        .social-icon {
          margin-left: 1rem;
        }
      }
    }
  }
`

const Navbar = styled.nav`
  ul {
    list-style: none;
    margin: 0;

    li {
      display: inline-block;
      margin-right: 2rem;
    }
  }

  a {
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
    text-transform: uppercase;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
  }
`

const LogoWrapper = styled.div`
  text-align: left;
  padding: 0;
  margin: 0;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
  }
`
