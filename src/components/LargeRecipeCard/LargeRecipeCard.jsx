import React from 'react';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import Time from 'components/Time/Time';
import MuiProviderTheme from 'components/MuiProviderTheme/MuiProviderTheme';

import { RecipeCardBox, StyledLink, DeleteSvg } from './LargeRecipeCard.styled';

const LargeRecipeCard = ({ recipe, type }) => {
  const splitText = (stringToSplit, separator) => {
    return stringToSplit.split(separator).slice(0, -1);
  };
  function truncateTitle(str) {
    const shortTitle = str.split(' ');
    return shortTitle.length < 4
      ? shortTitle.join(' ')
      : shortTitle.slice(0, 2).join(' ');
  }
  const handleRemoveLocalRecipesList = (e, value) => {};
  return recipe.map(item => {
    return (
      <ThemeProvider theme={MuiProviderTheme} key={item._id}>
        <RecipeCardBox>
          <img src={item.preview} alt={item.title} />

          <div className="description-conainer">
            <h3>{truncateTitle(item.title)}</h3>
            <IconButton
              aria-label="delete picture"
              component="label"
              className={type}
              onClick={() => handleRemoveLocalRecipesList(item._id)}
            >
              <DeleteSvg type={type} />
            </IconButton>
            <div className="description">
              {splitText(item.description, '.').map(item => {
                return (
                  <div className="description-text" key={item}>
                    {item}.
                  </div>
                );
              })}
            </div>
            <div className="btn-conainer">
              <Time minutes={Number(item.time)}></Time>
              <StyledLink
                type={type}
                key={item._id}
                to={`/recipe/${item._id}`}
                className="link"
              >
                See recipe
              </StyledLink>
            </div>
          </div>
        </RecipeCardBox>
      </ThemeProvider>
    );
  });
};

export default LargeRecipeCard;
