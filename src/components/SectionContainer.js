import React from 'react'
import PropTypes from 'prop-types'

function SectionContainer (props) {
  const { styles, containerType } = props;
  const defaultStyles = {
    maxWidth: (containerType === 'fixed-width') ? '1200px' : '100%',
    width: '100%',  
    margin: '0 auto',
    padding: '2rem 0',
    background: '#ffffff',
  }
  const sectionStyles = Object.assign(defaultStyles, styles);

  return (
    <div className='section-container' style={sectionStyles}>
      {props.children}
    </div>
  )
}

export default SectionContainer;

SectionContainer.propTypes = {
  styles: PropTypes.object,
  containerType: PropTypes.string,
}