import styled from 'styled-components';
// import { NavLink as Link } from 'react-router-dom';
import { ReactComponent as SvgHeaderLogo } from '../../images/icons/logo-header.svg';

export const HeaderLogo = styled(SvgHeaderLogo)`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

// export const LogoImg = styled.img`
//   /* display: block; */
//   /* position: relative;
//   top: 45px;
//   z-index: 5; */
//   width: 40px;
//   height: 40px;
//   @media (min-width: 768px) {
//     width: 44px;
//     height: 44px;
//     margin-right: 168px;
//   }
// `;
// export const LogoLink = styled(Link)``;
