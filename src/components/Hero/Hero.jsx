import ChooseYourBreakfast from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import Search from 'components/Search/Search';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import React from 'react';
import {
  Description,
  BackgroundContainer,
  HeroBox,
  Title,
} from './Hero.styled';

const Hero = () => {
  return (
    <>
      <BackgroundContainer>
        <Section>
          <Wrapper>
            <HeroBox>
              <Title>
                <span className="title-green">So</span>Yummy
              </Title>
              <Description>
                "What to cook?" is not only a recipe app, it is, in fact, your
                cookbook. You can add your own recipes to save them for the
                future.
              </Description>
              <Search />
            </HeroBox>
          </Wrapper>
        </Section>
        <ChooseYourBreakfast />
      </BackgroundContainer>
    </>
  );
};

export default Hero;
