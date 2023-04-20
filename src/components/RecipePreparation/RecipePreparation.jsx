import React from 'react';
import {
  InstructionsStyled,
  RecipePreparationStyled,
  StepsStyled,
  StepsListStyled,
  DefaultRecipeImg,
} from './RecipePreparation.styled';

export default function RecipePreparation({ instructions, previewImg, alt }) {
  const splitText = (stringToSplit, separator) => {
    if (
      stringToSplit !== null &&
      stringToSplit.length &&
      !Array.isArray(stringToSplit)
    ) {
      return stringToSplit
        .split(separator)
        .filter(n => n)
        .filter(x => x.length > 3);
    }
  };
  const instructionsArr = splitText(instructions, '\r\n');
  return (
    <RecipePreparationStyled>
      <h2>Recipe Preparation</h2>
      {/* TODO: потрібно розбити інстуркції на кроки */}
      <InstructionsStyled>
        <StepsListStyled>
          {instructionsArr.map((instruction, key) => {
            return (
              <StepsStyled key={instruction}>
                <span>{key + 1}</span>
                <p>{instruction}</p>
              </StepsStyled>
            );
          })}
        </StepsListStyled>
        {previewImg ? <img src={previewImg} alt={alt}></img> : <DefaultRecipeImg />}
      </InstructionsStyled>
    </RecipePreparationStyled>
  );
}
