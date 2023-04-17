import styled from 'styled-components';
import { ReactComponent as SvgHeaderLogo } from '../../images/icons/logo-header.svg';

export const HeaderLogo = styled(SvgHeaderLogo)`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
