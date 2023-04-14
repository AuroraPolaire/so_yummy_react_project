import React from 'react';
import { InstructionsStyled, RecipePreparationStyled } from './RecipePreparation.styled';

export default function RecipePreparation({instructions, previewImg, alt}) {
  return (
    <RecipePreparationStyled>
      <h2>Recipe Preparation</h2>
        {/* TODO: потрібно розбити інстуркції на кроки */}
          <InstructionsStyled>
            <p>{instructions}</p>
            {previewImg && <img src={previewImg} alt={alt} ></img>}
          </InstructionsStyled>
    </RecipePreparationStyled>
  )
}
