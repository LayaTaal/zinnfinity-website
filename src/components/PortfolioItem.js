import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PortfolioImage from './PorfolioImage'

function PortfolioItem (props) {
  const { itemData } = props;
  const { name, imageURL, altText, siteURL } = itemData;

  return (
    <div 
      className='portfolio-item-container'
      style={{
        marginBottom: '1rem'
      }}
    >
      <a href={siteURL} style={{textDecoration: 'none'}} target='blank' rel='noopener noreferrer'>
      <PortfolioImage src={imageURL} />
        <h5 style={{
          textAlign: 'left',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: '#3fc9a7'
        }}>{name}</h5>
      </a>
    </div>
  )
}

export default PortfolioItem;

PortfolioItem.propTypes = {
  itemData: PropTypes.object.isRequired
}