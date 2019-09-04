import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function ServiceCallout (props) {
  const { title, description, bullets, className } = props;
  return (
    <CalloutBox className={className}>
      <h4 className='service-title'>
        {title}
      </h4>
      <p className='service-description'>
      {description}
      </p>
      <ul className='service-bullets'>
        {bullets.map((bulletPoint, index) => {
          return <li key={index}>{bulletPoint}</li>
        })}
      </ul>
    </CalloutBox>
  );
}

export default ServiceCallout;

ServiceCallout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  bullets: PropTypes.array,
  className: PropTypes.string.isRequired
}

const CalloutBox = styled.aside`
  box-shadow: 0px 4px 12px ${props => props.theme.colors.grayLight};
  border-radius: 5px;
  padding: 2rem;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white}
`