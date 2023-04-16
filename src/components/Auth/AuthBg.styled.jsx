import styled from 'styled-components';

export const AuthSharedOrderFoodBg = styled.div`
  display: flex;
  justify-content: center;

  align-items: flex-start;
  padding-top: 87px;
  /* padding-left: auto;
  padding-right: auto; */

  z-index: 10;
/* fill: var(--accent-color-gray); */
  width: 285px;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
    fill: var(--accent-color-gray);
  }
  @media screen and (min-width: 1440px) {
    width: 532px;
    height: 468px;
    fill: var(--font-white);
  }

  svg {
    z-index: -10;
    width: 100%;
    height: 100%;
    overflow: visible;
    fill: var(--font-white);
    width: 285px;
    height: 250px;
    padding: 0;
    margin: 0;
    @media screen and (min-width: 768px) {
      width: 409px;
      height: 359px;
      fill: var(--accent-color-gray);
    }
    @media screen and (min-width: 1440px) {
      width: 532px;
      height: 468px;
      fill: var(--font-white);
    }
  }
`;
