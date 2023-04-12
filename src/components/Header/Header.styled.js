import styled from 'styled-components';

export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  max-width: 343px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    max-width: 704px;
  }
  @media (min-width: 1280px) {
    padding: 18px 0;
    max-width: 1240px;
  }
`;

export const HeaderModal = styled.div`
  padding: 18px 16px;
  width: 100wv;
  display: flex;
  justify-content: space-around;
`;
