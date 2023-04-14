import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.background};
  color: ${props => props.color};
  border-radius: 24px 44px;
  /* border: 1px solid ${props => props.borderColor}; */
`;

/* padding: ${props => {
    switch (props.type) {
      case 'mainPage':
        return `20px 52px`;

      case 'recipePage':
        return '18px';

      case 'categoryPage':
        return `60px`;

      default:
        return;
    } */
/* }} */
