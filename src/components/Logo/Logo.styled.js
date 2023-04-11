import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    margin-right: 168px;
  }
`;
export const LogoLink = styled(Link)``;
