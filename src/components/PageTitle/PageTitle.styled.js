import styled from 'styled-components';

export const Title = styled.h2`
  padding-bottom: ${props => {
    switch (props.type) {
      case 'mainPage':
        return `28px`;

      case 'recipePage':
        return '18px';

      case 'addRecipe':
        return '72px';

      case 'categoryPage':
        return `60px`;

      case 'searchPage':
        return `50px`;

      case 'shoppingListPage':
        return `50px`;

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
    line-height: 1;
    font-weight: 600px;
    font-size: ${props => {
      switch (props.type) {
        case 'mainPage':
          return '44px';
        case 'recipePage':
          return '32px';

        case 'addRecipe':
          return '32px';

        case 'categoryPage':
          return `32px`;

        case 'searchPage':
          return '32px';

        case 'shoppingListPage':
          return `32px`;
        default:
          return;
      }
    }};
    padding-bottom: ${props => {
      switch (props.type) {
        case 'mainPage':
          return '40px';

        case 'recipePage':
          return '24px';

        case 'addRecipe':
          return '100px';

        case 'categoryPage':
          return `60px`;

        case 'searchPage':
          return `40px`;

        case 'shoppingListPage':
          return `72px`;

        default:
          return;
      }
    }};


  @media screen and (min-width: 1440px) {
    font-size: 44px;
    padding-bottom: ${props => {
      switch (props.type) {
        case 'mainPage':
          return `50px`;
        case 'categoryPage':
          return `110px`;
        case 'searchPage':
          return `50px`;
        case 'shoppingListPage':
          return `72px`;
        default:
          return;
      }
    }};
  }

  :hover,
  :active,
  :focus {
    cursor: pointer;
    color: var(--accent-color-green);
  }
`;
