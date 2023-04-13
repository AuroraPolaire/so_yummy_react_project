import styled from 'styled-components';

export const SearchBox = styled.div`
  padding-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    height: 49px;
    margin-left: -50px;
    padding: 16px 32px;
    border-radius: 24px 44px;
    border: 1px solid var(--font-gray);
    color: var(--font-white);
    background-color: var(--font-gray);
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    justify-content: left;
    padding-bottom: 120px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const StyledInput = styled.input`
  padding-left: 32px;
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  background-color: #ffffff;
  color: var(--font-gray);
  height: 48px;

  ::placeholder {
    padding-left: 32px;
    color: #bdbdbd;
    font-size: 12px;
    font-weight: 400px;
  }
  :focus {
    background-color: #ffffff;
    border: 1px solid rgba(35, 38, 42, 0.2);
    outline: 0;
  }
`;
