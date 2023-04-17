import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { StyledInput } from './RecipeDescriptionFields.styled';
import CustomSelect from 'components/Select/Select';

const TIME_MAX = 120;

export default function RecipeDescriptionFields({ categories }) {
  const { setFieldValue } = useFormikContext();

  const createTimeOptions = maxTime => {
    const options = [];
    for (let i = 5; i <= maxTime; i += 5) {
      options.push(i);
    }

    return options;
  };

  return (
    <>
      <input
        id="fullImage"
        type="file"
        name="fullImage"
        onChange={event => {
          setFieldValue('fullImage', event.target.files[0]);
        }}
      />

      <label htmlFor="title">Enter recipe title</label>
      <Field name="title" type="text" as={StyledInput} />
      <ErrorMessage name="title" />

      <label htmlFor="description">Enter about recipe</label>
      <Field name="description" type="text" as={StyledInput} />
      <ErrorMessage name="description" />

      <label htmlFor="category">Category</label>
      <Field
        name="category"
        type="text"
        component={CustomSelect}
        func={arr =>
          arr.map(cat => (
            <option key={cat._id} value={cat.title}>
              {cat.title}
            </option>
          ))
        }
        options={categories}
      />
      <ErrorMessage name="category" />

      <label htmlFor="time">Cooking time</label>
      <Field
        name="time"
        type="text"
        component={CustomSelect}
        func={arr =>
          arr.map(opt => (
            <option key={opt} value={opt}>
              {opt} min
            </option>
          ))
        }
        options={createTimeOptions(TIME_MAX)}
      />
      <ErrorMessage name="time" />
    </>
  );
}
