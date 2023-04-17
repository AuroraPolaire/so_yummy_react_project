import styled from 'styled-components';
// import { ReactComponent as SvgNotFound } from '../../images/icons/page-not-found.svg';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
margin-bottom: 100px;    

  @media screen and (max-width: 768px) {
margin-bottom: 204px;    
  }
`;

export const NotFoundPictureContainer = styled.div`
  /* width: 259px;
  height: 170px;
margin-bottom: 14px;    

  @media screen and (max-width: 768px) {
margin-bottom: 32px; 
    width: 498px;
    height: 327px;   
  }

  @media screen and (min-width: 1440px) {
    width: 498px;
    height: 331px; */

  }
`;

export const NotFoundPicture = styled.img`
  width: 259px;
  height: 170px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    width: 498px;
    height: 327px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 498px;
    height: 331px;
    /* padding-top: 198px; */
  }
`;




export const NotFoundTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    max-width: 206px;
  }
`;



export const NotFoundTitle = styled.h2`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const NotFoundSubTitle = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.23;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
  }
`;

