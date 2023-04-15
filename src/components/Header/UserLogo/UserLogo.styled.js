import styled from 'styled-components';
// import { ReactComponent as EditIcon } from '../../../images/icons/edit-pencil.svg';

export const UserLogoBox = styled.div`
  display: flex;
  align-items: center;
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
