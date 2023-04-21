import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

import {
  BackgroundContainer,
  Section,
  SectionContainer,
  StyledLink,
  FormContainer,
  FormTitle,
} from './SignInPage.styled';

const SignInPage = () => {
  return (
    <Section>
      <BackgroundContainer>
        <SectionContainer>
          <FormContainer>
            <FormTitle>Sign In</FormTitle>
            <RegisterForm type="login" />
          </FormContainer>
          <StyledLink to="/register">Registration</StyledLink>
        </SectionContainer>
      </BackgroundContainer>
    </Section>
  );
};

export default SignInPage;
