import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <HeaderWrap>
    <div className='container'>
      <Logo style={{ gridColumn: `1/1`}} />
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
      <Description>
        <h1>
          Website Design and Development Solutions for your growing business.
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
    <WaveContainer>
      <div className='wave' />
    </WaveContainer>
  </HeaderWrap>
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
  height: 500px;
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: calc(300px + 2rem) calc(100% - 300px - 2rem);
    grid-template-rows: 50px;
    margin: 0 auto;
    padding: 2rem 0;
    max-width: ${props => props.theme.breakpoints.large}
  }
`

const Navbar = styled.nav`
  grid-column: 2/2;

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
  }
`

const Description = styled.div`
  grid-column: 2/2;
  display: flex;
  flex-flow: row wrap;
  color: ${props => props.theme.colors.white};

  h1 {
    width: 100%;
    padding: 1rem 0;
  }
  
  p {
    width: 50%;
    text-align: justify;

    &:first-of-type {
      padding-right: 2rem;
    }

    &:last-of-type {
      padding-left: 2rem;
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