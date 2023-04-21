import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { addRecipe, fetchCategoryList } from 'redux/recipes/recipesOperations';
import { selectCategoryList } from 'redux/recipes/recipesSelectors';
import { fetchIngredientsList } from 'redux/ingredients/ingredientsOperations';
import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';
import { StyledForm, SubmitButton } from './AddRecipeForm.styled';
import RecipeDescriptionFields from './RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields/RecipePreparationFields';

export default function AddRecipeForm() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    time: Yup.string().required('Required'),
    instructions: Yup.array().required('Required'),
    fullImage: Yup.mixed()
      .test(
        'fileSize',
        'File size is too large',
        value => value && value.size <= 10240
      ) // limit to 10kb
      .test(
        'fileType',
        'Only image files are allowed',
        value =>
          value && ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type)
      ),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryList());
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);

  const ingredients = useSelector(selectIngredientsList);

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
      validationSchema={validationSchema}
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
        navigate('/my');
      }}
    >
      {formik => (
        <StyledForm onSubmit={formik.handleSubmit}>
          <RecipeDescriptionFields categories={categories} />
          <RecipeIngredientsFields ingredients={ingredients} />
          <RecipePreparationFields></RecipePreparationFields>
          <SubmitButton
            type="submit"
            title="Add"
            background="#22252A"
            color="#FAFAFA"
            borderColor
          >
            {' '}
            Add{' '}
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}
