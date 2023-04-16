import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Time from 'components/Time/Time';

export const RecipeCardBox = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  background-color: #ffffff;

  & .description-conainer {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  & .btn-conainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  & img {
    display: block;
    width: 318px;
    border-radius: 8px;
    margin: 0;
  }

  & .description {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    padding-right: 120px;

    color: #23262a;
  }
  & h3 {
    color: #3e4462;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;

    @media screen and (min-width: 768px) {
      min-width: 300px;
    }

    @media screen and (min-width: 1440px) {
      min-width: 268px;
    }
  }
`;
export const StyledLink = styled(NavLink)`
  background-color: ${props => {
    switch (props.type) {
      case 'favorite':
        return `#22252A`;

      case 'my':
        return '#8BAA36';

      default:
        return;
    }
  }};
  display: inline-block;
  color: #fafafa;
  border-radius: 24px 44px;
  text-decoration: none;
  padding: 14px 38px;

  /* &.active {
    color: orange;
  } */
`;

export const StyledTime = styled(Time)`
  p {
    color: red;
    font-weight: bold;
  }
`;
