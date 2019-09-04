import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function SectionHeading (props) {
  const { title, subtitle, styles } = props;
  return (
    <Header style={styles}>
      {subtitle && (
        <div className='section-subtitle'>
          <span>{subtitle}</span>
        </div>
      )}
      {title && <h2 className='section-title'>{title}</h2>}
    </Header>
  )
}

SectionHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  styles: PropTypes.object,
}

export default SectionHeading;

const Header = styled.div`
  margin-bottom: 4rem;

  .section-subtitle {
    color: ${props => props.theme.colors.green};
    text-transform: uppercase;
    font-size: ${props => props.theme.typography.fontSize__small};
    font-weight: ${props => props.theme.typography.fontWeight__bold};
    letter-spacing: 1px;
    margin-bottom: 1rem;

    &:before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      background: ${props => props.theme.colors.green};
      width: 50px;
      height: 3px;
      margin-right: 0.5rem;
    }
  }
`;