import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SvgSearchIcon } from '../../images/icons/search.svg';

export const HeaderNavLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 182px;
  gap: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 186px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 44px;
    gap: 30px;
  }
`;

export const HeaderLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  color: var(--header-grey);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--accent-color-green);

    & svg {
      stroke: var(--accent-color-green);
    }
  }
  &.active {
    color: var(--accent-color-green);
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const HeaderSearchLinkWrapper = styled.div`
  display: flex;
  align-items: 'center';
  gap: 8px;
`;

export const SearchIcon = styled(SvgSearchIcon)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--font-gray);
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

// export const LogoutBtn = styled.button`
//   padding-top: 12px;
//   padding-bottom: 12px;
//   padding-left: 27px;
//   padding-right: 12px;
//   border-radius: 24px 44px;
//   border: 0;
//   color: var(--font-white);
//   background-color: var(--accent-color-green);
//   font-size: 14px;
//   transition: background-color var(--transition-dur-and-func);

//   :hover,
//   :active,
//   :focus {
//     cursor: pointer;
//     background-color: var(--font-gray);
//   }

//   @media screen and (min-width: 1440px) {
//     padding-left: 35px;
//     padding-right: 32px;
//   }
// `;
