import { SignInForm } from '../../components/SignInForm/SignInForm';
// import { NavLink } from 'react-router-dom';

import {
  BackgroundContainer,
  Section,
  // PictureContainer,
  SectionContainer,
  StyledLink,
  FormContainer,
  FormTitle,
} from './SignInPage.styled';

const SignInPage = () => {
  return (
    // <div>
    //   <h2>Sign In</h2>
    //   <SignInForm />
    //   <NavLink to="/register">Registration</NavLink>
    // </div>
    <Section>
      <BackgroundContainer>
        <SectionContainer>
          <FormContainer>
            <FormTitle>Sign In</FormTitle>
            <SignInForm />
          </FormContainer>
          <StyledLink to="/register">Registration</StyledLink>
        </SectionContainer>
      </BackgroundContainer>
    </Section>
  );
};

export default SignInPage;
