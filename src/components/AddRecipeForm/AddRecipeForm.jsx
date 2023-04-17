import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
// import * as Yup from 'yup';

import { addRecipe, fetchCategoryList } from 'redux/recipes/recipesOperations';
import { selectCategoryList } from 'redux/recipes/recipesSelectors';
import { fetchIngredientsList } from 'redux/search/searchOperations';

import RecipeDescriptionFields from './RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields/RecipePreparationFields';
import { StyledForm } from './AddRecipeForm.styled';

export default function AddRecipeForm() {
  // const validationSchema = Yup.object({
  //   title: Yup.string().required('Required'),
  //   instructions: Yup.string().required('Required'),
  //   category: Yup.string().required('Required'),
  //   time: Yup.string().required('Required'),
  // });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryList());
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);
  const ingredients = useSelector(state => state.search.results);

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        instructions: [],
        ingredients: [],
        category: '',
        time: '',
        fullImage: '',
      }}
      // validationSchema={validationSchema}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
      onSubmit={values => {
        const recipe = {
          ...values,
          ingredients: JSON.stringify(
            values.ingredients.map(({ id, quantity, measure }) => {
              return {
                id,
                measure: quantity + measure,
              };
            })
          ),
        };
        const formData = new FormData();
        Object.keys(recipe).forEach(key => {
          formData.append(key, recipe[key]);
        });

        dispatch(addRecipe(formData));

        // const reader = new FileReader();
        // reader.onload = () => {
        //   const imageDataUrl = reader.result;
        //   const recipe = {
        //     ...values,
        //     fullImage: imageDataUrl,
        //     ingredients: values.ingredients.map(({ id, quantity, measure }) => {
        //       return {
        //         id,
        //         measure: quantity + measure,
        //       }
        //     })
        //   }

        //   console.dir(recipe);
        //   dispatch(addRecipe(recipe));
        // };
        // reader.readAsDataURL(values.fullImage);
      }}
    >
      {formik => (
        <StyledForm onSubmit={formik.handleSubmit}>
          <RecipeDescriptionFields categories={categories} />
          <RecipeIngredientsFields ingredients={ingredients} />
          <RecipePreparationFields
            onCahnge={formik.handleChange}
          ></RecipePreparationFields>
          <button type="submit">Add</button>
        </StyledForm>
      )}
    </Formik>
  );
}
