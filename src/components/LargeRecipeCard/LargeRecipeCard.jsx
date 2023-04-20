import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import Time from 'components/Time/Time';
import MuiProviderTheme from 'components/MuiProviderTheme/MuiProviderTheme';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { RecipeCardBox, StyledLink, DeleteSvg } from './LargeRecipeCard.styled';
import { toggleFavouriteRecipes } from 'redux/favourite/favouriteOperations';
import { deleteMyRecipes } from 'redux/myRecipes/myRecipesOperations';

const LargeRecipeCard = ({ recipe, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
    }
  };

  return recipe.map(({ preview, _id, title, favorite, time, description }) => {
    if ((type === 'favorite' && favorite) || type === 'my') {
      return (
        <ThemeProvider theme={MuiProviderTheme} key={_id}>
          <RecipeCardBox>
            <img src={preview} alt={title} />
            <div className="description-conainer">
              <h3>{truncateTitle(title)}</h3>
              <IconButton
                aria-label="delete picture"
                component="label"
                className={type}
                onClick={() => handleOnDelete(_id)}
              >
                <input hidden type="button" />
                <DeleteSvg type={type} />
              </IconButton>
              <div className="description">
                {splitText(description, '.').map(item => {
                  return (
                    <div className="description-text" key={item}>
                      {item}.
                    </div>
                  );
                })}
              </div>
              <div className="btn-conainer">
                <Time minutes={Number(time)}></Time>
                <StyledLink
                  page={type}
                  type="button"
                  onClick={() =>
                    navigate(`/recipe/${_id}`, { state: location })
                  }
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

LargeRecipeCard.propTypes = {
  type: PropTypes.string.isRequired,
  recipe: PropTypes.array.isRequired,
};

export default LargeRecipeCard;
