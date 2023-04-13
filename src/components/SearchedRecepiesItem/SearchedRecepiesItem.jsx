import {
  RecipeItem,
  RecipeLink,
  RecipeWrapper,
  RecipeImage,
  RecipeTitleContainer,
  RecipeTitleName,
} from './SearchedRecepiesItem.styled';

const SearchedRecipesItem = ({ title, preview, id }) => {
  const animation = title.length > 34;

  return (
    <>
      <RecipeItem animation={animation}>
        <RecipeLink to={`/recipe/${id}`}>
          <RecipeWrapper>
            <RecipeImage src={preview} alt={title} />
            <RecipeTitleContainer>
              <RecipeTitleName>{title}</RecipeTitleName>
            </RecipeTitleContainer>
          </RecipeWrapper>
        </RecipeLink>
      </RecipeItem>
    </>
  );
};

export default SearchedRecipesItem;