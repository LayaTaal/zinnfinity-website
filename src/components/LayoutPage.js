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
          <main>{children}</main>
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
