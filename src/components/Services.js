import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import service_data from '../data/Services'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import Service from './Service'
import ServiceCallout from './ServiceCallout'

class Services extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      activeService: 'websites',
    }

    this.handleMouseEvent = this.handleMouseEvent.bind(this);
  }

  handleMouseEvent(event) {
    const serviceKeys = Object.keys(service_data); 
    const { activeService } = this.state;
    const name = event.target.getAttribute('name');
    const isValid = serviceKeys.includes(name);

    this.setState({
      activeService: isValid ? name : activeService,
    })
  }

  render () {
    const { title, subtitle } = this.props;
    const { activeService } = this.state;
    const serviceKeys = Object.keys(service_data);

    return (
      <SectionContainer padding='2rem' containerType='fixed-width'>
        <FlexBox>
          <div className='services-overview'>
            <SectionHeading title={title} subtitle={subtitle} />
            {serviceKeys.map((service, index) => {
              const isActive = service === activeService;
              return (
                <Service
                  key={index}
                  name={service}
                  className={isActive ? 'active service-box' : 'service-box'}
                  handler={this.handleMouseEvent}
                  title={service_data[service].title}
                  excerpt={service_data[service].excerpt}
                  description={service_data[service].description}
                  bullets={service_data[service].bullets}
                />
              )
            })}
          </div>
          <ServiceCallout
            className='service-callout-box'
            title={service_data[activeService].title}
            description={service_data[activeService].description}
            bullets={service_data[activeService].bullets}
          />
        </FlexBox>
      </SectionContainer>
    )
  }
}

export default Services;

Services.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;

  .services-overview {
    width: 100%;
  }

  .service-callout-box {
    display: none;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    .services-overview {
      width: calc(65% - 8rem);
      margin-right: 8rem;
    }
    
    .service-callout-box {
      display: block;
      width: 35%;
    }    
  }
`;