import React from 'react'
import PropTypes from 'prop-types'

function SectionContainer (props) {
  const { padding, containerType } = props;
  const sectionStyles = {
    maxWidth: (containerType === 'fixed-width') ? '1200px' : '100%',
    width: '100%',  
    margin: '0 auto',
    padding: padding ? padding : '2rem 0',
  }

  return (
    <div className='section-container' style={sectionStyles}>
      {props.children}
    </div>
  )
}

export default SectionContainer;

SectionContainer.propTypes = {
  padding: PropTypes.string,
  containerType: PropTypes.string
}