import styled from 'styled-components';
export const FieldStyled = styled.div`
  text-align: left;
  &.error-box.error {
    color: var(--error);
  }
  &.error-box.warning {
    color: var(--warning);
  }
  &.error-box.correct {
    color: var(--correct);
  }
`;
