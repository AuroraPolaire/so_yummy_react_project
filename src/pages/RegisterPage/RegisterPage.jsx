import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import {
  BackgroundContainer,
  Section,
  SectionContainer,
  StyledLink,
  FormContainer,
  FormTitle,
} from './../SignInPage/SignInPage.styled';

const RegisterPage = () => {
  return (
    <Section>
      <BackgroundContainer>
        <SectionContainer>
          <FormContainer>
            <FormTitle>Registration</FormTitle>
            <RegisterForm type="register" />
          </FormContainer>
          <StyledLink to="/login">Sign in</StyledLink>
        </SectionContainer>
      </BackgroundContainer>
    </Section>
  );
};

export default RegisterPage;
