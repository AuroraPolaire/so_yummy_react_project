import {
    ErrorMessage,
    Field,
    useFormikContext
} from 'formik';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function RecipePreparationFields() {
    const { setFieldValue } = useFormikContext();
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const splittedValue = inputValue.split('\n');
        setFieldValue('instructions', splittedValue);
    }, [inputValue, setFieldValue])
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }


  return (
    <div>
          <h2>Recipe Preparation</h2>
          <label htmlFor="instructions">Enter recipe</label>
          <Field
              value={inputValue}
              name="instructions"
              as="textarea"
              onChange={handleInputChange}
                />
          <ErrorMessage name="instructions" />
    </div>
  )
}

// СПРОБИ РЕАЛІЗАЦІЇ ЧЕРЕЗ СЛУХАЧА ПОДІЙ ТА PUSH

//----------РЕАЛІЗАЦІЯ НОМЕР 1 -----------------
// export default function RecipePreparationFields({ onCahnge }) {
//     const { values, setFieldValue } = useFormikContext();
    
//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter') {
//             const currentInputValue = e.target.value;
//             if (values.preparation.length > 0) {
//                 const newValue = [...values.preparation]
//                 newValue.push('');
//                 setFieldValue('preparation', newValue);
//             }
//         } else if (e.key === 'Backspace') {
//             const lastString = values.preparation[values.preparation.length - 1];
//             if (lastString === '') {
//                 const newValue = [...values.preparation];
//                 newValue.splice(-1, 1);
//                 setFieldValue('preparation', newValue);
//             }
//         }
//     }

//     const handleInputChange = (e) => {
//         const currentInputValue = e.target.value;
//         if (values.preparation.length === 0) {
//             const newValue = [currentInputValue];
//             setFieldValue('preparation', newValue);
//         }

//         if (values.preparation.length > 0) {
//             const newValue = [...values.preparation];
//             const latestText = currentInputValue.split('\n').pop();
//             newValue[newValue.length - 1] = latestText;
//             setFieldValue('preparation', newValue);
//         }
//     }

//   return (
//     <div>
//           <h2>Recipe Preparation</h2>
//           <label htmlFor="preparation">Enter recipe</label>
//           <Field
//               value={Array.isArray(values.preparation) ? values.preparation.join('\n') : values.preparation}
//               name="preparation"
//               as="textarea"
//               onKeyDown={handleKeyDown}
//               onChange={handleInputChange}
//                 />
//           <ErrorMessage name="preparation" />
//     </div>
//   )
// }


// ------РЕАЛІЗАЦІЯ НОМЕР 2 ---------------
    // const { values, setFieldValue } = useFormikContext();
    // const [inputValue, setInputValue] = useState('');

    // useEffect(() => {
    //     if (values.preparation.length < 2) {
    //         setFieldValue('preparation', [inputValue]);
    //     }
    // }, [inputValue, setFieldValue, values.preparation.length])
    
    // const handleInputChange = (e) => {
    //     setInputValue(e.target.value);
    // }

    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         const newArr = inputValue.split('\n');
    //         setFieldValue('preparation', newArr);
    //     }
    // }