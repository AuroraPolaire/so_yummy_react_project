import PageTitle from 'components/PageTitle/PageTitle';
import Time from 'components/Time/Time';
import React from 'react';

export default function RecipePageHero({title, description, favorite, time}) {
  return (
    <div>
        <PageTitle type='recipePage'>{title}</PageTitle>
        {description && <p>{description}</p>}
        {!favorite && <button>Add to favorite recipes</button>}
        {favorite && <button>Remove from favorite recipes</button>}
        {time.length > 0 && <Time minutes={parseInt(time)} />}
    </div>
  )
}
