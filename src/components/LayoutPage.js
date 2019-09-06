import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import './layout.css'
import Header from './HeaderPage'
import Footer from './Footer'

const Layout = props => {
  const { children } = props
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Header />
          <Main>{children}</Main>
          <Footer />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  min-height: calc(100vh - 400px);
  max-width: ${props => props.theme.breakpoints.small};
  margin: 0 auto;
  padding: 6rem 2rem 4rem 2rem;

  h2 {
    a {
      color: ${props => props.theme.colors.green};
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.black};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    padding: 6rem 0;
  }
`
