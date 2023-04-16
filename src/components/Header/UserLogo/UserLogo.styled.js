import styled from 'styled-components';
// import { ReactComponent as EditIcon } from '../../../images/icons/edit-pencil.svg';

export const UserLogoButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  margin-right: 14px;
  justify-content: center;
  align-items: center;
`;

export const UserAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const UserNameWrapper = styled.div``;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 170%;
  color: var(--font-gray);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const LogoutBtn = styled.button`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 27px;
  padding-right: 12px;
  border-radius: 24px 44px;
  border: 0;
  color: var(--font-white);
  background-color: var(--accent-color-green);
  font-size: 14px;
  transition: background-color var(--transition-dur-and-func);

  :hover,
  :active,
  :focus {
    cursor: pointer;
    background-color: var(--font-gray);
  }

  @media screen and (min-width: 1440px) {
    padding-left: 35px;
    padding-right: 32px;
  }
`;
