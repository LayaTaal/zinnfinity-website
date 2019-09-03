import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer';
import Service from './Service'

function Services (props) {
  const { title, subtitle } = props;
  return (
    <SectionContainer padding='2rem'>
      <ServicesOverview>
        <SectionHeading title={title} subtitle={subtitle} />
        <Service
          title='Business Websites'
          excerpt='Elegantly designed websites for any type of business'
          description='All businesses are different. That’s why I work with you to tailor your website to the specific needs and goals of your business.'
          bullets={[
            "Affordable and reliable",
            "The platform that’s right for you",
            "Modern sites that are blazing fast",
            "1 year no maintenance guarantee'",
          ]}
        />
        <Service
          title='JavaScript Development'
          excerpt='Dynamic websites with interactive experiences'
          description='I help develop solutions to provide dynamic content and amazing interactive experience to your customers and clients.'
          bullets={[
            "Bring dynamic data to your users",
            "Experiences that go beyond",
            "E-commerce solutions"
          ]}
        />
        <Service
          title='Data Visualization'
          excerpt='Show off your business with interactive charts and graphs'
          description='Libraries like d3, and charts.js help bring your data to life with amazing charts and graphs customized to your business.'
          bullets={[
            "Bring dynamic data to your users",
            "Experiences that go beyond",
            "E-commerce solutions"
          ]}
        />
      </ServicesOverview>
    </SectionContainer>
  )
}

export default Services;

Services.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

const ServicesOverview = styled.div`

`;