import React from 'react';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import MuiProviderTheme from 'components/MuiProviderTheme/MuiProviderTheme';

import {
  RecipeCardBox,
  StyledLink,
  StyledTime,
  DeleteSvg,
} from './LargeRecipeCard.styled';

// import Skeleton from '@mui/material/Skeleton';

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
  return recipe.map(item => {
    return (
      <ThemeProvider theme={MuiProviderTheme}>
        <RecipeCardBox key={item._id}>
          <img src={item.preview} alt={item.title} />

          <div className="description-conainer">
            <h3>{truncateTitle(item.title)}</h3>
            <IconButton
              aria-label="delete picture"
              component="label"
              className={type}
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
              <StyledTime minutes={Number(item.time)}></StyledTime>
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
