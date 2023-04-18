import styled from 'styled-components';
import { ReactComponent as SvgBurger } from '../../images/icons/burger.svg';

export const HeaderWrapper = styled.div`
  padding: 0 16px 28px;

  @media screen and (min-width: 375px) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 100px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 18px 16px 0;

  @media (min-width: 768px) {
    padding-top: 18px;
    max-width: 704px;
  }

  @media (min-width: 1280px) {
    max-width: 1240px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;

export const NavBurger = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const NavBurgerIcon = styled(SvgBurger)`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--font-gray);
  transition: color var(--transition-dur-and-func);

  @media (min-width: 1280px) {
    display: none;
  }

  &:hover,
  &:focus {
    stroke: var(--accent-color-green);
  }
`;
