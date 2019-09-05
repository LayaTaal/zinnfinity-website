/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import './layout.css'
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
  const { pageTitle, children, isHomepage } = props
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Header isHomepage={isHomepage || false} pageTitle={pageTitle} />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  isHomepage: PropTypes.bool,
}

export default Layout
