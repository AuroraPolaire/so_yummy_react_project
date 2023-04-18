import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoIcon = styled.svg`
  height: 20px;
  width: 20px;
    fill: #8BAA36;
    transition: fill 250ms linear;
  &:hover,
  &:focus {
    fill: #FAFAFA;
  }
`;
export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
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
