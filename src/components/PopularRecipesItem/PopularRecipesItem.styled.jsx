import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: var(--font-darkblue-p);
`;
export const List = styled.ul`
  :last-child {
    display: none;
  }
`;

export const RecipeCardBox = styled.li`
  @media screen and (min-width: 768px) {
    :nth-last-child(-n + 2) {
      display: none;
    }
  }
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 12px;
  position: relative;
  transition: background-color var(--transition-dur-and-func);
  &:after {
    content: '';
    position: absolute;
    bottom: -13px;
    left: 0;
    right: 0;
    opacity: 0.17;
    border: 1px solid var(--line-color);
  }

  :hover,
  :active,
  :focus {
    cursor: pointer;
    background-color: var(--switches-bg);
  }

  & .description {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.24px;
    color: var(--font-colorsecondary);
    max-height: 50px;
    overflow: hidden;
  }

  & img {
    width: 104px;
    height: 85px;
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
