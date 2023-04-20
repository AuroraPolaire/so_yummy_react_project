import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  width: 343px;
  height: 154px;
  padding: 10px 16px;
  resize: none;
  background:${props => props.theme.mode === "light" ? "#D9D9D9" : "var(--body-color-dark)"};
  border-radius: 6px;
  opacity:${props => props.theme.mode === "light" ? "50%" : "1"};
  

  @media screen and (min-width: 768px) {
      width: 505px;
      height: 224px;
    }
`;

export const Subtitle = styled.h2`
  margin-bottom: 24px;
  color:${props => props.theme.mode === "light" ? "var(--body-color-dark)" : "var(--font-white)"};
  
    @media screen and (min-width: 768px) {
      margin-bottom: 32px;
    }
`

export const RecipePreparationContainer = styled.div`
  margin-bottom: 18px;
  
    @media screen and (min-width: 768px) {
      margin-bottom: 32px;
    }
`