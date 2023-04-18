import React from 'react';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import Time from 'components/Time/Time';
import MuiProviderTheme from 'components/MuiProviderTheme/MuiProviderTheme';
import { useDispatch } from 'react-redux';

import { RecipeCardBox, StyledLink, DeleteSvg } from './LargeRecipeCard.styled';
import { toggleFavouriteRecipes } from 'redux/favourite/favouriteOperations';
import { deleteMyRecipes } from 'redux/myRecipes/myRecipesOperations';

const LargeRecipeCard = ({ recipe, type }) => {
  const dispatch = useDispatch();
  const splitText = (stringToSplit, separator) => {
    return stringToSplit.split(separator).slice(0, -1);
  };
  function truncateTitle(str) {
    const shortTitle = str.split(' ');
    return shortTitle.length < 4
      ? shortTitle.join(' ')
      : shortTitle.slice(0, 2).join(' ');
  }

  const handleOnDelete = id => {
    if (type === 'favorite') {
      dispatch(toggleFavouriteRecipes(id));
    }
    if (type === 'my') {
      dispatch(deleteMyRecipes(id));
      // 640cd5ac2d9fecf12e8898fa
    }
  };

  return recipe.map(item => {
    if ((type === 'favorite' && item.favorite) || type === 'my') {
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
                onClick={() => handleOnDelete(item._id)}
              >
                <input hidden type="button" />
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
    }
    return null;
  });
};

export default LargeRecipeCard;
