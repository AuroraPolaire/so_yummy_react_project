import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoIcon = styled.svg`
  height: 20px;
  width: 20px;
  fill:${props => props.theme.mode === "light" ? "var(--accent-color-green)" : "var(--font-white)"};
  transition: fill 250ms linear;
  &:hover,
  &:focus {
    fill: #b7c981;
  }
`;
export const SocialLinks = styled.ul`
  align-items: center;
  display: ${props => {
    switch (props.type) {
      case 'addRecipePage':
        return `none`;

      case 'footer':
        return `flex`;

      default:
        return;
    }
  }};
  justify-content: ${props => {
    switch (props.type) {
      case 'addRecipePage':
        return `flex-start`;

      case 'footer':
        return `center`;

      default:
        return;
    }
  }};

  margin-bottom: ${props => {
    switch (props.type) {
      case 'addRecipePage':
        return `100px`;

      case 'footer':
        return `0`;

      default:
        return;
    }
  }};

  @media screen and (min-width: 1440px) {
    display: ${props => {
    switch (props.type) {
      case 'addRecipePage':
        return `flex`;

      case 'footer':
        return `flex`;

      default:
        return;
    }
  }};
  }
`;
export const SocialLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 14px;
  }
  @media screen and (min-width: 768px) {
    &:not(:first-child) {
      margin-left: 18px;
    }
  }
`;
