import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RecipeDescriptionFields from './RecipeDescriptionFields/RecipeDescriptionFields';
import { StyledForm } from './AddRecipeForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryList } from 'redux/recipes/recipesOperations';
import { selectCategoryList } from 'redux/recipes/recipesSelectors';
import RecipeIngredientsFields from './RecipeIngredientsFields/RecipeIngredientsFields';

export default function AddRecipeForm() {
    const validationSchema = Yup.object({
       title: Yup.string()
         .required('Required'),
       description: Yup.string()
            .required('Required'),
       category: Yup.string()
            .required('Required'),
       time: Yup.string()
         .required('Required'),
    })
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);
  
    return (
      <Formik
       initialValues={{
        title: '',
        description: '',
        instructions: '',
        ingredients: [],
        category: '',
        time: '',
        fullImage: '',
        }}
       validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
        //  setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        //    setSubmitting(false);
        //  }, 400);
       }}
        >
        {formik => (
         <StyledForm onSubmit={formik.handleSubmit}>
            <RecipeDescriptionFields categories={categories}  setFieldValue={formik.setFieldValue} />
            <RecipeIngredientsFields />
            <button type="submit">Add</button>
         </StyledForm>
       )}
     </Formik>
  )
}
