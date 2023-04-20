import styled from 'styled-components';

// Forms, inputs, buttons

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    width: 233%;
    display: block;
  }
`;

export const SubmitButton = styled.button`
background-color: #22252A;
color: #FAFAFA;
border-radius: 24px 44px;
border: 1px solid green;
padding: 12px 48px;
font-family: 'Poppins';
font-size: 16px;
line-height: 1.5;

&:hover,
&:focus {
  background: #8BAA36;
}
@media screen and (min-width: 768px) {
  padding: 14px 64px;
  }
`
