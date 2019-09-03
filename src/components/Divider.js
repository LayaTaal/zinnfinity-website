import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

export default function Divider(props) {
  const { width, height, background, marginBottom, showDesktop } = props;

  return (
    <HorizontalDivider
      width={width ? width : '100%'}
      height={height ? height : '1px'}
      background={background ? background : '#f4f4f4'}
      marginBottom={marginBottom ? marginBottom : '1rem'}
      showDesktop={showDesktop ? 'block' : 'none'}
    />
  )
}

Divider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
  marginBottom: PropTypes.string,
  showDesktop: PropTypes.bool,
}

const HorizontalDivider = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  margin-bottom: ${props => props.marginBottom};

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    display: ${props => props.showDesktop};
  }
`