import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
// import { useEffect, useState } from 'react';
import { List } from './PreviewRecipesList.styled';
import LargeRecipeCard from 'components/LargeRecipeCard/LargeRecipeCard';

// import PropTypes from 'prop-types'
// =======================

const PreviewRecipesList = ({
  type,
  recipesList,
}) => {
  return (
    <TransitionGroup>
      {recipesList.map((item, key) => {
        return (
          <Collapse key={item}>
            <div key={item[0]}>
              {key === 0 ? (
                <>
                  <List className={item[1]}>
                    <LargeRecipeCard
                      recipe={item[1]}
                      type={type}
                    ></LargeRecipeCard>
                  </List>
                </>
              ) : null}
            </div>
          </Collapse>
        );
      })}{' '}
    </TransitionGroup>
  );
};

// PreviewRecipesList.propTypes = {}

export default PreviewRecipesList;
