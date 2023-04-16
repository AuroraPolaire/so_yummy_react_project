import {
    ErrorMessage, Field,
    // useFormikContext
} from 'formik'
import React from 'react'

export default function RecipePreparationFields(
    // { onCahnge }
) {
    // const { values, setFieldValue } = useFormikContext();
    
    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         const newValue = e.target.value.trim();
    //         console.log(newValue);
    //         if (newValue !== '') {
    //             const latestText = newValue.split('\n').pop();
    //             console.log(latestText);
    //             const previousState = values.preparation;
    //             console.log(previousState);
    //             // setFieldValue('preparation', [...previousState, latestText]);
    //             // setData((prevState) => [...prevState, latestText]);
    //         }
    //     } 

    //     //   if (e.target.value === '' && data.length > 0) {
    //     //       setData([]);
    //     // }
    // }

  return (
    <div>
          <h2>Recipe Preparation</h2>
          <label htmlFor="preparation">Enter recipe</label>
            <Field
              name="preparation"
              as="textarea"
            //   onKeyDown={handleKeyDown}
            //   onChange={(e) => {
            //       onCahnge(e);
            //       const newValue = e.target.value.trim();
            //       if (newValue !== '') {
            //           const latestText = newValue.split('\n').pop();
            //           const previousState = values.preparation;
            //         //   const newState = previousState.splice(-1, 1, latestText)
            //         //   setFieldValue('preparation', newState);
            //       }
            //   }}
                />
          <ErrorMessage name="preparation" />
    </div>
  )
}
