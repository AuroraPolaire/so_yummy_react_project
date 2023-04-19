import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { NavLink } from 'react-router-dom';
// import { Wrapper } from 'components/theme/GlobalContainer';
// import { ReactComponent as Picture } from '../../images/icons/auth-bg-orderfood.svg';
// import AuthBg from '../../components/Auth/AuthBg';

// import AuthBottomBg from '../../components/Auth/AuthBottomBg';

import {
  BackgroundContainer,
  Section,
  // PictureContainer,
  SectionContainer,
  StyledLink,
  FormContainer,
  FormTitle,
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Section>
      <BackgroundContainer>
        {/* <AuthBg />
    <AuthBottomBg /> */}
        {/* <BackgroundContainer> */}
        {/* <Wrapper> */}
        {/* <Section> */}
        {/* <PictureContainer>
            <Picture />
          </PictureContainer> */}
        <SectionContainer>
          <FormContainer>
            <FormTitle>Registration</FormTitle>
            <RegisterForm />
          </FormContainer>
          <StyledLink to="/login">Sign in</StyledLink>
        </SectionContainer>
        {/* </Section> */}
        {/* </Wrapper> */}
        {/* </BackgroundContainer> */}
      </BackgroundContainer>
    </Section>
  );
};

export default RegisterPage;
