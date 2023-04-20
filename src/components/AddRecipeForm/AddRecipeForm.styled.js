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
color: #FAFAFA;
border-radius: 24px 44px;
border: 1px solid green;
padding: 12px 48px;
font-family: 'Poppins';
font-size: 16px;
line-height: 1.5;
background-color:${props => props.theme.mode === "light" ? "var(--font-gray)" : "var(--accent-color-green)"};

&:hover,
&:focus {
  background: #8BAA36;
}
@media screen and (min-width: 768px) {
  padding: 14px 64px;
  }
`
