import styled from 'styled-components';

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: var(--font-darkblue-p);
  margin-bottom: 32px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 37px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
