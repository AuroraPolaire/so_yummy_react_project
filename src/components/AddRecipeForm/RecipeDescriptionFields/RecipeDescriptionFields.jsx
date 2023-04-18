import React from 'react';
import { Field, useFormikContext } from 'formik';
import { StyledImageInput, StyledInput, FileUploadLabel, DefaultPhotoIcon, StyledErrorMessage, SelectContainer, RelativeContainer, RecipeDescriptionContainer } from './RecipeDescriptionFields.styled';
import CustomSelect from 'components/Select/Select';

const TIME_MAX = 120;

export default function RecipeDescriptionFields({ categories }) {
  const { errors, touched, setFieldValue } = useFormikContext();
  const createTimeOptions = maxTime => {
    const options = [];
    for (let i = 5; i <= maxTime; i += 5) {
      options.push(i);
    }

    return options;
  };

  return (
    <RecipeDescriptionContainer>
      <FileUploadLabel htmlFor="fullImage">
        <StyledImageInput id="fullImage" type="file" name='fullImage' onChange={(event) => {
          setFieldValue("fullImage", event.currentTarget.files[0]);
        }} />
        <DefaultPhotoIcon />
      </FileUploadLabel>

      <RelativeContainer>
      <Field  
        name="title"
        type="text"
        as={StyledInput}
          placeholder='Enter recipe title'
          isError={errors.title && touched.title}
      />
      {errors.title && touched.title && (
        <StyledErrorMessage type='input' isError={errors.title}>{errors.title}</StyledErrorMessage>
        )}
      </RelativeContainer>

      <RelativeContainer>  
      <Field
        name="description"
        type="text"
        as={StyledInput}
        placeholder='Enter about recipe'
        isError={errors.description && touched.description}
      />
      {errors.description && touched.description && (
        <StyledErrorMessage type='input' >{errors.description}</StyledErrorMessage>
      )}
      </RelativeContainer>
      
      <SelectContainer
        isError={errors.category && touched.category}
      >
        <label htmlFor="category">Category</label>
        <Field
          name="category"
          type="text"
          component={CustomSelect}
          func={(arr) => arr.map(cat => <option key={cat._id} value={cat.title}>{cat.title}</option>)}
          options={categories}
          />
        {errors.category && touched.category && (
        <StyledErrorMessage type='select'>{errors.category}</StyledErrorMessage>
      )}
      </SelectContainer>

      <SelectContainer
        isError={errors.time && touched.time}
      >
        <label htmlFor="time">Cooking time</label>
        <Field
          name="time"
          type="text"
          component={CustomSelect}
          func={(arr) => arr.map(opt => <option key={opt} value={opt}>{ opt } min</option>)}
          options={createTimeOptions(TIME_MAX)}
        />
        {errors.time && touched.time && (
        <StyledErrorMessage type='select'>{errors.time}</StyledErrorMessage>
      )}
      </SelectContainer>
    </RecipeDescriptionContainer>
  )
}
