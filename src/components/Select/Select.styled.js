import Select from "react-select";
import styled from 'styled-components';

export const StyledSelect = styled(Select)`
  min-width: 200px;

  .menu-portal {
    z-index: 9999;
  }

  .menu {
    max-height: 194px;
  }
`;