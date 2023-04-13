import styled from 'styled-components';

export const Title = styled.h2`
  padding-bottom: ${props => {
    switch (props.type) {
      case 'mainPage':
        return `28px`;
      case 'recipePage':
        return '18px';
      default:
        return;
    }
  }};
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  text-align: left;
  letter-spacing: -2%;
  color: var(--font-darkblue-heading);
  text-transform: capitalize;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1;
    font-weight: 600px;
    padding-bottom: ${props => {
      switch (props.type) {
        case 'mainPage':
          return `40px`;
        case 'recipePage':
        return '24px';
        default:
          return;
      }
    }};
    font-size: 44px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: ${props => {
      switch (props.type) {
        case 'mainPage':
          return `50px`;
        default:
          return;
      }
    }};
  }
`;
