import styled from 'styled-components';

export const SearchBox = styled.form`
  padding-bottom: 80px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  & div {
    display: flex;
    width: 295px;
    @media screen and (min-width: 768px) {
      width: 365px;
    }
    @media screen and (min-width: 1440px) {
      width: 500px;
    }
  }

  & button {
    margin-left: -50px;
    padding: 15px 31px;
    border-radius: 24px 44px;
    border: 0;
    color: var(--font-white);
    background-color: var(--font-gray);
    font-size: 14px;

    @media screen and (min-width: 768px) {
      padding: 18px 52px;
      font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
      padding: 23px 52px;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: left;
    padding-bottom: 120px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: left;
  }
`;

export const StyledInput = styled.input`
  padding-left: 32px;
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  background-color: #ffffff;
  color: var(--font-gray);
  height: 52px;

  @media screen and (min-width: 768px) {
    height: 59px;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    height: 70px;
    width: 100%;
  }

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
