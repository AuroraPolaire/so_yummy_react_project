import styled from 'styled-components';

export const SquaresContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Green1 = styled.div`
  z-index: -5;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 120px;
  top: 79px;
  background: #8baa36;
  border-radius: 3px;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
    left: 203px;
    top: 91px;
  }

  @media screen and (min-width: 1440px) {
    left: 312px;
    top: 122px;
  }
`;

export const Green2 = styled.div`
  z-index: -2;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 349px;
  top: 111px;
  background: #8baa36;
  border-radius: 3px;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
    left: 710px;
    top: 104px;
  }

  @media screen and (min-width: 1440px) {
    left: 1234px;
    top: 135px;
  }
`;
export const Black1 = styled.div`
  z-index: -2;
  position: absolute;
  width: 6px;
  height: 6px;
  left: 247px;
  top: 144px;
  background: #22252a;
  border-radius: 3px;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    left: 422px;
    top: 160px;
  }

  @media screen and (min-width: 1440px) {
    left: 792px;
    top: 204px;
  }
`;
