import React from 'react';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
// import PageNotFound from '../../images/icons/page-not-found.svg';
import { NotFoundPicture, NotFoundContainer, NotFoundTitle, NotFoundSubTitle } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Section>
      <Wrapper>
        <NotFoundPicture />
        <NotFoundContainer>
        <NotFoundTitle>We are sorry,</NotFoundTitle>
        <NotFoundSubTitle>but the page you were looking for can’t be found..</NotFoundSubTitle>
        </NotFoundContainer>
      </Wrapper>
    </Section>
  );
};

export default NotFoundPage;
