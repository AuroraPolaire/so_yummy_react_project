import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import RecipeDescriptionFields from './RecipeDescriptionFields/RecipeDescriptionFields';

export default function AddRecipeForm() {
    const validationSchema = Yup.object({
       title: Yup.string()
         .required('Required'),
       about: Yup.string()
            .required('Required'),
       category: Yup.string()
            .required('Required'),
       time: Yup.string()
         .required('Required'),
    })
  
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
         <Form onSubmit={formik.handleSubmit}>
           <RecipeDescriptionFields formik={formik} />
           <button type="submit">Add</button>
         </Form>
       )}
     </Formik>
  )
}
