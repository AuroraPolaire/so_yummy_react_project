import React from 'react';
import { List } from './PreviewRecipesList.styled';
import LargeRecipeCard from 'components/LargeRecipeCard/LargeRecipeCard';

// import PropTypes from 'prop-types'
// =======================

const PreviewRecipesList = ({ type, recipesList }) => {
  return (
    <div>
      {recipesList.flatMap((item, key) => {
        return (
          <div key={item[0]}>
            {key === 0 ? (
              <>
                <List>
                  <LargeRecipeCard
                    recipe={item[1]}
                    type={type}
                  ></LargeRecipeCard>
                </List>
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

// PreviewRecipesList.propTypes = {}

export default PreviewRecipesList;
