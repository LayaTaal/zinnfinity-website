import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import PortfolioItem from './PortfolioItem'
import portfolio_data from '../data/Portfolio'

function Portfolio (props) {
  const { title } = props;

  return (
    <SectionContainer 
      styles={{
        padding: '4rem 0',
      }}
      containerType='fluid-width'
    >
      <SectionHeading 
        title={title} 
        styles={{
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '500px',
          margin: '0 auto',
          padding: '0 2rem'
        }}
      />
      <Wrapper>
        <FlexBox>
          {portfolio_data.map((portfolioItem, index) => {
            return <PortfolioItem key={index} itemData={portfolioItem} />
          })}
        </FlexBox>
      </Wrapper>
    </SectionContainer>
  )
}

export default Portfolio;

Portfolio.propTypes = {
  title: PropTypes.string,
}

const Wrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.black};
  padding: 2rem;
`

const FlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem 1rem 2rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    flex-flow: row wrap;
  }
`;