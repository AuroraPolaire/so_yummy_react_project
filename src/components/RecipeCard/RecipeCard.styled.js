import styled from 'styled-components';

export const RecipeCardBox = styled.div`
  position: relative;

  & img {
    width: 343px;
    height: 323px;
    border-radius: 8px;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      width: 336px;
      height: 323px;
    }

    @media screen and (min-width: 1440px) {
      width: 300px;
      height: 323px;
    }
  }

  & .title {
    min-width: 307px;
    padding: 16px 0 16px 16px;
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translate(-50%);
    background: #ffffff;
    border-radius: 8px;
    padding: 16px;
    text-align: left;
    line-height: 1.25;
    color:${props => props.theme.mode === "light" ? "var(--font-darkblue-p)" : "var(--font-white)"};
    background-color:${props => props.theme.mode === "light" ? "var(--body-color-light)" : "var(--body-color-dark)"};
    
    

    @media screen and (min-width: 768px) {
      min-width: 300px;
    }

    @media screen and (min-width: 1440px) {
      min-width: 268px;
    }
  }
`;
