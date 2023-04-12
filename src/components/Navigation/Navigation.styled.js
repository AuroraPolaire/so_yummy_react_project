import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import { NavLink as Link } from 'react-router-dom';
import { ReactComponent as SvgBurger } from '../../images/icons/burger.svg';

export const HeaderSection = styled.div`
  position: relative;
  padding-top: 18px;
  z-index: 3;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
    padding-top: 19px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    min-height: auto;
    padding-top: 18px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media (min-width: 1280px) {
    flex-direction: row;
    margin-right: 179px;
    justify-content: space-around;
  }
`;

export const HeaderLinkWrap = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const HeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-direction: column;
  color: #23262a;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #8baa36;
  }
  .active {
    color: #8baa36;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    margin-top: 0;
    margin-left: 30px;
    font-size: 14px;
    justify-content: center;
  }

  &:hover {
    color: #8baa36;
  }
  &.active {
    color: #8baa36;
    text-decoration: none;
  }
`;

export const NavBurger = styled.button`
  border: none;
  /* background-color: transparent; */
  width: 32px;
  height: 32px;
`;

export const NavBurgerIcon = styled(SvgBurger)`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #22252a;
  @media (min-width: 1280px) {
    display: none;
  }
  /* & div {
    width: 25px;
    height: 3px;
    border-radius: 2px;
  } */
`;
