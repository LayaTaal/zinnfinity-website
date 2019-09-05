import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Divider(props) {
  const { customStyles, showDesktop } = props
  const defaultStyles = {
    width: '100%',
    height: '1px',
    background: '#f4f4f4',
    margin: '0 0 1rem 0',
  }
  const styles = Object.assign(defaultStyles, customStyles)

  return (
    <HorizontalDivider
      styles={styles}
      showDesktop={showDesktop ? 'block' : 'none'}
    />
  )
}

Divider.propTypes = {
  customStyles: PropTypes.object,
  showDesktop: PropTypes.bool,
}

const HorizontalDivider = styled.div`
  width: ${props => props.styles.width};
  height: ${props => props.styles.height};
  background: ${props => props.styles.background};
  margin: ${props => props.styles.margin};

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    display: ${props => props.showDesktop};
  }
`
