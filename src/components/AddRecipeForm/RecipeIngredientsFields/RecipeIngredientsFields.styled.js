import styled from 'styled-components';
import Select from 'react-select';
import { Field } from 'formik';

export const IngredientsFieldsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    margin-right: 116px;
  }
`;
export const CounterContainer = styled.div`
  display: flex;
  padding: 4px 14px;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 18px;

  button {
    width: 14px;
    height: 14px;
    padding: 0;
    color: #8baa36;
    background-color: transparent;
    border: none;
  }
`;

export const InputsContainer = styled.li`
  width: 343px;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const MeasureContainer = styled.div`
  display: flex;
  position: relative;
  gap: 0;

  & .unitInput {
    width: 57px;
    height: 53px;
    z-index: 5;
    position: absolute;
    right: -50px;
    border: 0;
    background-color: #f5f5f5;
    /* opacity: 0.5; */
    border-radius: 6px;
    outline: none;

    @media screen and (min-width: 768px) {
      left: 40px;
      height: 59px;
    }

    @media screen and (min-width: 1440px) {
    }
  }
`;

export const NumberInput = styled(Field)`
  position: relative;
  padding-left: 10px;
  width: 45px;
  height: 53px;
  cursor: pointer;
  border: 0;
  background-color: #f5f5f5;
  /* opacity: 0.5; */
  border-radius: 6px;
  outline: none;

  @media screen and (min-width: 768px) {
    /* width: 97px; */
    height: 59px;
    /* margin-right: 157px; */
  }
  @media screen and (min-width: 1440px) {
    /* margin-right: 60px; */
  }
`;

export const UnitInput = styled(Field)``;

export const IngrInput = styled(Field)``;

export const StyledSelect = styled(Select)`
  background-color: #f5f5f5;
  width: 194px;
  height: 53px;
  border: none;
  border-radius: 6px;
  outline: none;
  letter-spacing: -0.02em;
  /* opacity: 0.5; */
  @media screen and (min-width: 768px) {
    width: 398px;
    height: 59px;
  }
  @media screen and (min-width: 1440px) {
    /* margin-right: 60px; */
  }
`;
