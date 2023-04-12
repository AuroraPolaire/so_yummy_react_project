import React from 'react';
import { Description, Dish, HeroBox, Spinach, Title } from './Hero.styled';

const Hero = () => {
  return (
    <>
      <HeroBox>
        <Title>
          <span className="title-green">So</span>Yummy
        </Title>
        <Description>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </Description>
        <Dish />
        <Spinach />
        <div></div>
      </HeroBox>
    </>
  );
};

export default Hero;
