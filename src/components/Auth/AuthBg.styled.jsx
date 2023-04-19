import styled from 'styled-components';

export const AuthSharedOrderFoodBg = styled.div`
  display: flex;
  justify-content: center;

  /* align-items: flex-start; */
  padding-top: 87px;
  /* padding-left: auto;
  padding-right: auto; */

  z-index: 10;
  /* fill: var(--accent-color-gray); */
  /* width: 285px;
  height: 250px; */
  @media screen and (min-width: 768px) {
    /* width: 409px;
    height: 359px; */
    fill: var(--accent-color-gray);
    padding-top: 96px;
  }
  @media screen and (min-width: 1440px) {
    /* width: 532px;
    height: 468px; */
    justify-content: flex-start;
    fill: var(--font-white);
    padding-top: 115px;
    padding-left: 113px;
  }

  /* & :first-child {
    @media screen and (min-width: 768px) and (max-width: 1440px) {
      overflow: hidden;
      position: absolute;
      clip: rect(0 0 0 0);
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
      display: none;
    }
  }
  & :last-child {
    display: none;
    @media screen and (min-width: 768px) and (max-width: 1440px) {
      display: flex;
    }
  }

  & :not(:first-child) {
    display: none;
    @media screen and (min-width: 768px) and (max-width: 1440px) {
      display: flex;
    }
  } */

  .bgWhiteLegs {
    
    @media screen and (min-width: 768px) and (max-width: 1440px) {
        display: none;
    }
  }

  .bgBlackLegs {
    display: none;
    
    @media screen and (min-width: 768px) and (max-width: 1440px) {
        display: flex;
    }
  }

  svg {
    z-index: -10;
    width: 100%;
    height: 100%;
    overflow: visible;
    /* fill: var(--font-white); */

    width: 285px;
    height: 250px;
    padding: 0;
    margin: 0;
    @media screen and (min-width: 768px) {
      width: 409px;
      height: 359px;
      /* fill: var(--accent-color-gray); */
    }
    @media screen and (min-width: 1440px) {
      width: 532px;
      height: 468px;
      /* fill: var(--font-white); */
    }
  }
`;
