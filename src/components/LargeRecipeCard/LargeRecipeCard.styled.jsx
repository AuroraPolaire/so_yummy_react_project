import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RecipeCardBox = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  background-color: #ffffff;

  & img {
    display: block;
    width: 318px;
    border-radius: 8px;
  }

  & .title {
    min-width: 307px;
    padding: 16px 0 16px 16px;
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translate(-50%);
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
    text-align: left;
    line-height: 1.25;
    color: var(--font-darkblue-p);

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
