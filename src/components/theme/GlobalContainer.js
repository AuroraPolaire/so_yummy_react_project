import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 16px 28px 16px;

  @media screen and (min-width: 375px) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  // 768px//

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 16px 32px;
  }

  //1280px//

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }

  // 1440px//

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 100px 32px;
  }
`;

export const Section = styled.section`
  padding-top: 114px;
  /* min-height: calc(100vh - 30px - 18px); */
  min-height: ${props => {
    switch (props.page) {
      case 'recipePage':
        return `auto`;

      default:
        return 'calc(100vh - 30px - 18px);';
    }
  }};

  @media screen and (min-width: 768px) {
    padding-top: 136px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 164px;
  }
`;
