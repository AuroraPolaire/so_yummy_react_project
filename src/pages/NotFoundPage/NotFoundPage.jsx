import React from 'react';
// import MainTitle from 'components/MainTitle/MainTitle';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
// import PageNotFound from '../../images/icons/page-not-found.svg';
import NotFound from '../../images/icons/page-not-found.svg';

import {
  NotFoundPicture,
  NotFoundContainer,
  NotFoundPictureContainer,
  NotFoundTextContainer,
  NotFoundTitle,
  NotFoundSubTitle,
} from './NotFoundPage.styled';
import Squares from 'components/Squares/Squares';

const NotFoundPage = () => {
  return (
    <>
      <Squares />
      <Section>
        <Wrapper>
          {/* <MainTitle></MainTitle> */}
          <NotFoundContainer>
            <NotFoundPictureContainer>
              <NotFoundPicture src={NotFound} alt="Page not found" />
            </NotFoundPictureContainer>
            <NotFoundTextContainer>
              <NotFoundTitle>We are sorry,</NotFoundTitle>
              <NotFoundSubTitle>
                but the page you were looking for can’t be found..
              </NotFoundSubTitle>
            </NotFoundTextContainer>
          </NotFoundContainer>
        </Wrapper>
      </Section>
    </>
  );
};

export default NotFoundPage;
