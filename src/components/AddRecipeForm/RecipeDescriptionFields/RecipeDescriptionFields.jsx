import React, { useState } from 'react';
import { Field, useFormikContext } from 'formik';
import {
  StyledImageInput,
  StyledInput,
  FileUploadLabel,
  DefaultPhotoIcon,
  StyledErrorMessage,
  SelectContainer,
  RelativeContainer,
  RecipeDescriptionContainer,
  InputContainers,
  // RelativeContainerPlaceholder,
  // FileUploadBox,
} from './RecipeDescriptionFields.styled';
import CustomSelect from 'components/Select/Select';

const TIME_MAX = 120;

export default function RecipeDescriptionFields({ categories }) {
  const { errors, touched, setFieldValue } = useFormikContext();
  const [previewImage, setPreviewImage] = useState('');

  const handleFileUpload = event => {
    const file = event.currentTarget.files[0];
    setFieldValue('fullImage', file);

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage('');
    }
  };

  const createTimeOptions = maxTime => {
    const options = [];
    for (let i = 5; i <= maxTime; i += 5) {
      options.push(i);
    }

    return options;
  };

  const preparedTimeOptions = createTimeOptions(TIME_MAX).map(opt => {
    return {
      value: opt.toString(),
      label: `${opt} min`,
    };
  });

  const preparedCategories = categories.map(opt => {
    return {
      value: opt.title,
      label: opt.title,
    };
  });

  return (
    <RecipeDescriptionContainer>
      <FileUploadLabel htmlFor="fullImage">
        {previewImage && <img src={previewImage} alt="preview" />}
        <StyledImageInput
          id="fullImage"
          type="file"
          name="fullImage"
          onChange={handleFileUpload}
        />
        <DefaultPhotoIcon />
        {/* {errors.fullImage && (
        <StyledErrorMessage type="file">{ errors.fullImage}</StyledErrorMessage>
      )} */}
      </FileUploadLabel>

      <InputContainers>
        <RelativeContainer>
          <Field
            name="title"
            type="text"
            as={StyledInput}
            placeholder="Enter recipe title"
            isError={errors.title && touched.title}
          />
          {errors.title && touched.title && (
            <StyledErrorMessage type="input" isError={errors.title}>
              {errors.title}
            </StyledErrorMessage>
          )}
        </RelativeContainer>

        <RelativeContainer>
          <Field
            name="description"
            type="text"
            as={StyledInput}
            placeholder="Enter about recipe"
            isError={errors.description && touched.description}
          />
          {errors.description && touched.description && (
            <StyledErrorMessage type="input">
              {errors.description}
            </StyledErrorMessage>
          )}
        </RelativeContainer>

        <SelectContainer isError={errors.category && touched.category}>
          <label htmlFor="category">Category</label>
          <Field
            name="category"
            type="text"
            component={({ field, form }) => (
              <CustomSelect
                ofType="descInput"
                options={preparedCategories}
                value={preparedCategories.find(
                  option => option.value === field.value
                )}
                onChange={option => {
                  form.setFieldValue(field.name, option.value);
                }}
                onBlur={event => {
                  field.onBlur(event);
                  form.setFieldTouched(field.name, true);
                }}
                menuPosition={'fixed'}
                isSearchable={false}
                // func={arr =>
                //   arr.map(cat => (
                //     <option id="option" key={cat._id} value={cat.title}>
                //       {cat.title}
                //     </option>
                //   ))
                // }
                // options={categories}
              />
            )}
          />
          {errors.category && touched.category && (
            <StyledErrorMessage type="select">
              {errors.category}
            </StyledErrorMessage>
          )}
        </SelectContainer>

        <SelectContainer isError={errors.time && touched.time}>
          <label htmlFor="time">Cooking time</label>
          <Field
            name="time"
            type="text"
            component={({ field, form }) => (
              <CustomSelect
                ofType="descInput"
                options={preparedTimeOptions}
                value={preparedTimeOptions.find(
                  option => option.value === field.value
                )}
                onChange={option => {
                  form.setFieldValue(field.name, option.value);
                }}
                onBlur={event => {
                  field.onBlur(event);
                  form.setFieldTouched(field.name, true);
                }}
                menuPosition={'fixed'}
                isSearchable={false}
              />
            )}
            // func={arr =>
            //   arr.map(opt => (
            //     <option key={opt} value={opt}>
            //       {opt} min
            //     </option>
            //   ))
            // }
            // options={createTimeOptions(TIME_MAX)}
          />
          {errors.time && touched.time && (
            <StyledErrorMessage type="select">{errors.time}</StyledErrorMessage>
          )}
        </SelectContainer>
      </InputContainers>
    </RecipeDescriptionContainer>
  );
}
