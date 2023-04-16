import styled from 'styled-components';
import Select from "react-select";

export const IngredientsFieldsHeader = styled.div`
display: flex;
align-items: center;

h2{
    margin-right: 116px;
}
`
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
    color: #8BAA36;
    background-color: transparent;
    border: none;
}
`

export const InputsContainer = styled.div`
display: flex;
`

export const MeasureContainer = styled.div`
display: flex;
width: 53px;
`

export const NumberInput = styled.input`

`

export const StyledSelect = styled(Select)`
  min-width: 200px;

  .menu-portal {
    z-index: 9999;
  }

  .menu {
    max-height: 194px;
  }
`;