import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import { TiArrowRightThick } from "react-icons/ti";
import Divider from './Divider';

function Service (props) {
  const { name, title, excerpt, description, bullets, className, handler } = props;
  return (
    <ServiceContainer className={className} name={name} onMouseEnter={handler}>
      <h3 className='service-title'>
        <TiArrowRightThick className='service-title__icon' />
        {title}
      </h3>
      <p className='service-excerpt'>
        {excerpt}
      </p>
      <Divider marginBottom='1.5rem' showDesktop={false} />
      <p className='service-description'>
      {description}
      </p>
      <ul className='service-bullets'>
        {bullets.map((bulletPoint, index) => {
          return <li key={index}>{bulletPoint}</li>
        })}
      </ul>
    </ServiceContainer>
  )
}

export default Service;

Service.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  description: PropTypes.string,
  bullets: PropTypes.array,
  className: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
}

const ServiceContainer = styled.div`
  box-shadow: 0px 2px 18px ${props => props.theme.colors.grayLightest};
  border-radius: 5px;
  padding: 2rem;

  .service-title {
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }

  .service-title__icon {
    color: ${props => props.theme.colors.green};
    margin: 0 0.5rem 0 -1.5rem;
    display: none;
  }

  .service-excerpt {
    color: ${props => props.theme.colors.green};
  }

  .service-bullets {
    list-style: none;
    margin-left: 0;

    li {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    cursor: pointer;
    padding: 2rem 3rem;
    transition: 0.3s box-shadow ease-in-out;

    &:not(.active) {
      box-shadow: none;

      :hover {
        box-shadow: 0px 2px 18px ${props => props.theme.colors.grayLightest};        
      }
    }

    .service-title__icon {
      display: inline-block;
    }
    .service-description, .service-bullets {
      display: none;
    }

    .service-excerpt {
      margin-bottom: 0;
    }
  }
`;