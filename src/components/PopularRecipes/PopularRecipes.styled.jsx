import styled from 'styled-components';

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color:${props => props.theme.mode === "light" ? "var(--font-darkblue-p)" : "var(--font-white)"};
  margin-bottom: 32px;

  &.linksTitle {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    &.linksTitle {
      display: block;
    }
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 37px;
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    margin-bottom: 165px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 37px;
    margin-bottom: 0px;
  }
`;
