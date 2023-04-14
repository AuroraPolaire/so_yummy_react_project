import styled from 'styled-components';

export const Title = styled.h2`
  padding-bottom: ${props => {
    switch (props.type) {
      case 'mainPage':
        return `28px`;

      case 'recipePage':
        return '18px';

      case 'categoryPage':
        return `60px`;

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
  transition: color var(--transition-dur-and-func);
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

        case 'categoryPage':
          return `60px`;

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
        case 'categoryPage':
          return `110px`;
        default:
          return;
      }
    }};
  }

  :hover {
    cursor: pointer;
    color: var(--accent-color-green);
  }
`;
