import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <React.Fragment>
    <HeaderWrap>
      <div className='container'>
        <Navbar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2/">Page 2</Link>
            </li>
          </ul>
        </Navbar>
        <LogoWrapper>
          <Logo/>
        </LogoWrapper>
        <Description>
          <h1>
            Website Design and Development Solutions for your Business
          </h1>
          <p>
            I’m a web developer passionate about creating unique websites for individuals, organizations, and businesses. 
            I love getting to know new teams and helping make their vision become a reality.
          </p>
          <p>
            I have successfully helped businesses plan and launch everything from marketing websites, 
            to complex e-commerce storefronts, and dynamic React based webpages.
          </p>
        </Description>
      </div>
    </HeaderWrap>
    <WaveContainer>
      <div className='wave' />
    </WaveContainer>
  </React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrap = styled.div`
  background: ${props => props.theme.colors.black};
  width: 100%;
  height: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    height: 525px;
  }

  .container {
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    max-width: ${props => props.theme.breakpoints.large};

    @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
      display: grid;
      grid-template-columns: calc(300px + 2rem) calc(100% - 300px - 2rem);
      grid-template-rows: 50px;
    }
  }
`

const Navbar = styled.nav`
  text-align: center;

  ul {
    list-style: none;
    margin-left: 0;

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
    grid-column: 2/2;
    text-align: left;
  }
`

const LogoWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    grid-column: 1/2;
    text-align: left;
    padding: 0;
  }
`

const Description = styled.div`
  color: ${props => props.theme.colors.white};

  h1 {
    width: 100%;
    padding: 1rem 0;
    max-width: 640px;
    margin-bottom: 0;
    
    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
      font-size: 1.5rem;
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
    }
  }
  
  p {
    width: 50%;

    &:first-of-type {
      padding-right: 1rem;
    }

    &:last-of-type {
      padding-left: 1rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
      display: none;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    display: flex;
    flex-flow: row wrap;
    grid-column: 2/2;

    h1 {
      text-align: left;
    }
  }
`

const WaveContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;

  .wave {
    display: block;
    position: relative;
    height: 40px;
    background: ${props => props.theme.colors.black};
  }

  .wave:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color: white;
    right: -25%;
    top: 20px
  }

  .wave:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color: ${props => props.theme.colors.black};
    left: -25%;
    top: -240px;
  }
`