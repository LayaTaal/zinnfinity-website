import React from 'react'
import PropTypes from 'prop-types'

function SectionContainer (props) {
  const { padding } = props;
  return (
    <div 
      className='section-container' 
      style={{
        padding: padding ? padding : '2rem 0',
      }}
    >
      {props.children}
    </div>
  )
}

export default SectionContainer;

SectionContainer.propTypes = {
  padding: PropTypes.string
}