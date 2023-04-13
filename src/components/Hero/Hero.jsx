import ChooseYourBreakfast from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import Search from 'components/Search/Search';
import { Wrapper } from 'components/theme/GlobalContainer';
import React from 'react';
import {
  Description,
  Dish,
  GrayBG,
  HeroBox,
  PositioningBox,
  Spinach,
  SpinachBlur,
  Title,
} from './Hero.styled';

const Hero = () => {
  return (
    <>
      <PositioningBox>
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

        <ChooseYourBreakfast />
        <Dish />
        <Spinach />
        <SpinachBlur />
        <GrayBG />
      </PositioningBox>
    </>
  );
};

export default Hero;
