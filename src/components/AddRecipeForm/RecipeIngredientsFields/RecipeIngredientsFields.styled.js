import styled from 'styled-components';
import Select from 'react-select';
import { Field } from 'formik';
import { ReactComponent as Cross } from '../../../images/icons/cross-icon.svg';

export const IngredientsFieldsContainer = styled.div`
width: 343px;
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }

  ul {
    margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
  }
`

export const IngredientsFieldsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h2 {
    margin-right: 116px;
    color:${props => props.theme.mode === "light" ? "var( --accent-color-gray)" : "var(--font-white)"};
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  padding: 4px 14px;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border-radius: 18px;
  color:${props => props.theme.mode === "light" ? "var( --accent-color-gray)" : "var(--font-white)"};
  border:${props => props.theme.mode === "light" ? "1px solid rgba(51, 51, 51, 0.3)" : "1px solid #FAFAFA"};

  button {
    width: 14px;
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
  gap: 14px;
  :not(:last-child) {
    margin-bottom: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 32px;
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const MeasureContainer = styled.div`
  display: flex;
  gap: 0;
  width: 84px;
  @media screen and (min-width: 768px) {
    width: 97px;
  }
`;

export const NumberInput = styled(Field)`
  padding-left: 10px;
  /* min-width: 32px; */
  width: 35%; 
  height: 53px;
  cursor: pointer;
  border: 0;
  background-color: #f5f5f5;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  outline: none;
  text-align: right;

  /* Chrome, Safari, Edge, Opera */
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
  -moz-appearance: textfield;

  @media screen and (min-width: 768px) {
    height: 59px;
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
  @media screen and (min-width: 768px) {
    width: 398px;
    height: 59px;
  }
  @media screen and (min-width: 1440px) {
    /* margin-right: 60px; */
  }
`;

export const DeleteBtn = styled.button`
border: none;
outline: none;
background-color: transparent;
margin-left: auto;
`

export const CrossIcon = styled(Cross)`
  width: 18px;
  height: 18px;
  

  :hover path,
  :focus path {
    stroke: red;
  }

    @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
