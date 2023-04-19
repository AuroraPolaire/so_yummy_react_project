import CustomSelect from 'components/Select/Select';
import { ErrorMessage, useFormikContext } from 'formik';
import React, { useState } from 'react';
import {
  CounterContainer,
  IngredientsFieldsHeader,
  IngrInput,
  InputsContainer,
  InputWrap,
  MeasureContainer,
  NumberInput,
  StyledSelect,
  UnitInput,
} from './RecipeIngredientsFields.styled';

const MEASURES = ['itms', 'tbs', 'tsp', 'kg', 'g', 'cup'];

export default function RecipeIngredientsFields({ ingredients }) {
  const [counter, setCounter] = useState(0);
  const { values, setFieldValue } = useFormikContext();

  const incrementCounter = () => {
    setCounter(prevState => prevState + 1);
    setFieldValue('ingredients', [
      ...values.ingredients,
      { title: '', id: '', quantity: '', measure: '' },
    ]);
  };

  const decrementCounter = () => {
    setCounter(prevState => (prevState > 0 ? prevState - 1 : prevState));
    setFieldValue('ingredients', [
      ...values.ingredients.slice(0, counter - 1),
      ...values.ingredients.slice(counter),
    ]);
  };

  const preparedIngredients = ingredients.map(opt => {
    return {
      id: opt._id,
      value: opt.ttl,
      label: opt.ttl,
    };
  });

  const customStyles = {
    // option: (provided, state) => ({
    //   // ...provided,
    //   height: '18px',
    //   backgroundColor: state.isFocused ? '#ddd' : 'white',
    //   color: state.isFocused ? 'black' : 'gray',
    //   marginBottom: '6px',
    // }),
    control: (provided, state) => ({
      // ...provided,
      display: 'flex',
      height: '53px',
      width: '194px',
      borderRadius: '6px',
    }),
    //   menu: (provided, state) => ({
    //   // ...provided,
    //   backgroundColor: 'white',
    //   boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);',
    //   borderRadius: '6px',
    //     marginTop: '0',
    //   maxHeight: '144px',  // (optionHeight + optionMarginBottom) * 6
    // }),
  };

  const renderInputs = () => {
    return Array.from({ length: counter }, (_, i) => (
      <InputsContainer key={i}>
        <InputWrap>
          {/* <div> */}
          <IngrInput
            name={`ingredients[${i}].title`}
            className="input"
            component={({ field, form }) => (
              <StyledSelect
                styles={customStyles}
                options={preparedIngredients}
                value={preparedIngredients.find(
                  option => option.value === field.value
                )}
                onChange={option => {
                  form.setFieldValue(field.name, option.value);
                  form.setFieldValue(`ingredients[${i}].id`, option.id);
                }}
                onBlur={field.onBlur}
                menuPortalTarget={document.body}
                menuPosition={'fixed'}
                isSearchable
              />
            )}
          />
          <ErrorMessage name="ingredients" />
          <MeasureContainer>
            <NumberInput
              name={`ingredients[${i}].quantity`}
              type="number"
              min="0"
              as={NumberInput}
            />
            <ErrorMessage name="ingredients" />
            <UnitInput
              name={`ingredients[${i}].measure`}
              type="text"
              component={CustomSelect}
              func={arr =>
                arr.map(opt => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))
              }
              options={MEASURES}
            />
            <ErrorMessage name="ingredients" />
          </MeasureContainer>
        </InputWrap>
      </InputsContainer>
    ));
  };

  return (
    <div>
      <IngredientsFieldsHeader>
        <h2>Ingredients</h2>
        <CounterContainer>
          <button
            type="button"
            onClick={decrementCounter}
            disabled={counter === 0}
          >
            -
          </button>
          <p>{counter}</p>
          <button type="button" onClick={incrementCounter}>
            +
          </button>
        </CounterContainer>
      </IngredientsFieldsHeader>
      <ul>{renderInputs()}</ul>
    </div>
  );
}
