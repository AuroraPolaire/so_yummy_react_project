import styled from 'styled-components';

import arrowDown from '../../images/icons/arrow-down.svg';

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
  margin-top: 24px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 28px;
    gap: 18px;
  }
  @media screen and (min-width: 1440px) {
    /* gap: 14px; */
  }
`;

export const SelectorText = styled.p`
  font-size: 12px;
  line-height: 1.33;
  font-weight: 500;
  color: #001833;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const TypeSelector = styled.select`
  height: 34px;
  width: 146px;
  padding-left: 14px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.5);
  background: url(${arrowDown}) right 19px center;
  background-repeat: no-repeat;
  background-color: #D9D9D9;
  background-size: 7px;
  appearance: none;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    background-size: 10px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const SelectorOption = styled.option`
  &:checked {
    background-color: red;
    color: blue;
  }
`;