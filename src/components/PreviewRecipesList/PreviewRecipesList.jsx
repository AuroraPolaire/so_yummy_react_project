import React from 'react';
import PropTypes from 'prop-types';
import { List } from './PreviewRecipesList.styled';
import LargeRecipeCard from 'components/LargeRecipeCard/LargeRecipeCard';

const PreviewRecipesList = ({ type, recipesList }) => {
  return recipesList.map((item, key) => {
    return (
      <div key={item}>
        {key === 0 ? (
          <List className={item[1]}>
            <LargeRecipeCard recipe={item[1]} type={type}></LargeRecipeCard>
          </List>
        ) : null}
      </div>
    );
  });
};

PreviewRecipesList.propTypes = {
  type: PropTypes.string.isRequired,
  recipesList: PropTypes.array.isRequired,
};

export default PreviewRecipesList;
