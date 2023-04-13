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
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/recipe/640cd5ac2d9fecf12e8898a6`);
  };
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
            <button onClick={handleSubmit}>Recipe</button>
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
