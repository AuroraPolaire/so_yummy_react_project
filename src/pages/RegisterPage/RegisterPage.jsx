import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';
import { Wrapper } from 'components/theme/GlobalContainer';
import { ReactComponent as Picture } from '../../images/icons/auth-bg-orderfood.svg';
// import AuthBg from '../../components/Auth/AuthBg';

import AuthBottomBg from '../../components/Auth/AuthBottomBg';


import {
  // BackgroundContainer,
  Section,
  PictureContainer,
  SectionContainer,
  FormContainer, FormTitle
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <>
    {/* <AuthBg /> */}
    <AuthBottomBg />
    {/* <BackgroundContainer> */}
      <Wrapper>
        <Section>
          <PictureContainer>
            <Picture />
          </PictureContainer>
          <SectionContainer>
            <FormContainer>
              <FormTitle>Registration</FormTitle>
              <RegisterForm />
            </FormContainer>
            <NavLink to="/login">Sign in</NavLink>
          </SectionContainer>
        </Section>
      </Wrapper>
    {/* </BackgroundContainer> */}
    </>
  );
};

export default RegisterPage;
