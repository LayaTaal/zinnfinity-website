import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import { TiArrowRightThick } from "react-icons/ti";
import Divider from './Divider';

function Service (props) {
  const { title, excerpt, description, bullets } = props;
  return (
    <ServiceContainer>
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
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  description: PropTypes.string,
  bulletPoint: PropTypes.array,
}

const ServiceContainer = styled.div`
  box-shadow: 0px 4px 12px ${props => props.theme.colors.grayLight};
  border-radius: 5px;
  padding: 2rem;
  margin: 2rem 0;

  .service-title {
    letter-spacing: 2px;
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
    padding: 2rem 3rem;

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