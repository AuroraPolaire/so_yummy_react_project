import styled from 'styled-components';

export const UserLogoButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props =>
    props.theme.mode === 'light' ? 'var(--header-grey)' : 'var(--font-white)'};
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  margin-right: 14px;
  justify-content: center;
  align-items: center;
`;

export const UserNameWrapper = styled.div``;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;
  color: ${props =>
    props.theme.mode === 'light' ? 'var(--font-gray)' : 'var( --font-white)'};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    color: var(--accent-color-green);
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 24px 44px;
  border: 0;
  color: var(--font-white);
  background-color: var(--accent-color-green);
  font-size: 14px;
  font-weight: 400;
  transition: background-color var(--transition-dur-and-func);

  :hover,
  :active,
  :focus {
    cursor: pointer;
    background-color: var(--font-gray);
  }

  @media screen and (min-width: 768px) {
    padding-left: 35px;
    padding-right: 32px;
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.6;
  color: ${props =>
    props.theme.mode === 'light' ? 'var(--font-gray)' : 'var(--font-white)'};
  font-weight: 500;
  transition: color var(--transition-dur-and-func);

  :hover,
  :active,
  :focus {
    cursor: pointer;
    color: var(--accent-color-green);
  }
`;
