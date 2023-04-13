import styled from 'styled-components';

export const StyledBox = styled.div`
  box-sizing: border-box;
  width: 225px;
  height: 92px;
  top: 49%;
  left: 30%;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--font-white);
  position: absolute;

  @media screen and (min-width: 768px) {
    padding: 12px;
    width: 260px;
    height: 100px;
    top: 35%;
    left: 60%;
  }
  @media screen and (min-width: 1440px) {
    padding: 16px;
    width: 298px;
    height: 114px;
    top: 40%;
    left: 70%;
  }
  & p {
    font-size: 12px;
    font-weight: 500px;
    line-height: 1.5;
    color: var(--font-darkblue-p);

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.3;
    }
    @media screen and (min-width: 1440px) {
      line-height: 1.4;
    }
  }

  & p > span {
    color: var(--accent-color-green);
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: right;
    font-size: 10px;
    font-weight: 400px;
    line-height: 1.2;
    color: var(--font-darkblue-p);

    @media screen and (min-width: 768px) {
      padding-top: 7px;
    }
  }

  & svg {
    padding-left: 7px;
    width: 15px;
    height: 11px;
    stroke: var(--font-darkblue-p);
  }
`;
