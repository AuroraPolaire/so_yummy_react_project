import React from 'react';

// retina default images
import defMobile1 from '../../images/ingredients/ingredient-def@1px.jpg';
import defMobile2 from '../../images/ingredients/ingredient-def@2px.jpg';
import defTablet1 from '../../images/ingredients/ingredient-def-768@1px.jpg';
import defTablet2 from '../../images/ingredients/ingredient-def-768@2px.jpg';
import defDesktop1 from '../../images/ingredients/ingredient-def-1400@1px.jpg';
import defDesktop2 from '../../images/ingredients/ingredient-def-1400@2px.jpg';

export function DefaultIngredientPicture() {
  return (
    <picture>
      <source srcSet={`${defMobile1} 1x, ${defMobile2} 2x`} media="(max-width: 768px)" />
      <source srcSet={`${defTablet1} 1x, ${defTablet2} 2x`} media="(min-width: 769px) and (max-width: 1439px)" />
      <source srcSet={`${defDesktop1} 1x, ${defDesktop2} 2x`} media="(min-width: 1440px)" />
      <img src={defDesktop1} alt="default ingredient" />
    </picture>
  );
}