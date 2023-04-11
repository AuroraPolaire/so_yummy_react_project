import styled from 'styled-components';
// import { NavLink as Link } from 'react-router-dom';

export const NavContainer = styled.nav`
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

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const NavMenuItem = styled.li`
  margin-right: 1rem;

  & > a {
    text-decoration: none;
    color: ${props => (props.active ? '#000' : '#aaa')};
    font-weight: ${props => (props.active ? 'bold' : 'normal')};
    padding: 0.5rem;
  }
`;

export const NavBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (min-width: 1280px) {
    display: none;
  }
  & div {
    width: 25px;
    height: 3px;
    background: #22252a;
    border-radius: 2px;
  }
`;
