import CustomSelect from 'components/Select/Select';
import { ErrorMessage, useFormikContext } from 'formik';
import React, { useState } from 'react';
import {
  CounterContainer,
  CrossIcon,
  DeleteBtn,
  IngredientsFieldsContainer,
  IngredientsFieldsHeader,
  IngrInput,
  InputsContainer,
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
      ...values.ingredients.slice(0, counter - 1), //all the objects that appear before counter index
    ]);
  };

    const deleteInputByIndex = (index) => {
      const newIngredients = [...values.ingredients];
      newIngredients.splice(index, 1);
      setFieldValue('ingredients', newIngredients);
      setCounter((prevState) => prevState - 1);    
  }

  const preparedIngredients = ingredients.map(opt => {
    return {
      id: opt._id,
      value: opt.ttl,
      label: opt.ttl,
    };
  });

  const preparedMeasures = MEASURES.map(opt => {
    return {
      value: opt,
      label: opt,
      }}
  )

  // STYLES FOR SEARCH INGREDIENTS INPUT
  const customStyles = {
    option: (provided, state) => ({
      // ...provided,
      minHeight: '18px',
      marginBottom: '6px',
      paddingLeft: '18px',
      fontSize: '12px',
      lineHeight: 1.5,
      fontFamily: 'Poppins',
      letterSpacing: '-0.02em',
      backgroundColor: state.isFocused ? '#ddd' : 'white',
      color: state.isFocused ? 'black' : 'gray',
      '@media screen and (min-width: 768px)': {
        minHeight: '21px',
        fontSize: '14px',
      },
    }),
    control: (provided, state) => ({
      // ...provided,
      display: 'flex',
      width: '100%',
      padding: '16px',
      borderRadius: '6px',
      border: 'none',
      '& .css-1dimb5e-singleValue': {
        color: 'gray',
        fontSize: '14px',
        lineHeight: 1.5,
        fontFamily: 'Poppins',
        '@media screen and (min-width: 768px)': {
          fontSize: '18px',
        },
      },
      '& .css-1jqq78o-placeholder': {
        color: 'gray',
        fontSize: '18px',
        lineHeight: 1.5,
        fontFamily: 'Poppins',
        '@media screen and (min-width: 768px)': {
          
        },
        '@media screen and (min-width: 1440px)': {
          
        },
      },
      '& .css-1xc3v61-indicatorContainer': {
        display: 'none',
      },
      '& .css-1u9des2-indicatorSeparator': {
        display: 'none',
      }, 
    }),
      menu: (provided, state) => ({
      // ...provided,
        backgroundColor: 'white',
        overflowY: 'hidden',
        boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);',
        borderRadius: '6px',
        maxHeight: '160px',  // ((optionHeight + optionMarginBottom) * 6) + marginTop*2
        '@media screen and (min-width: 768px)': {
          maxHeight: '178px',
        },
        '@media screen and (min-width: 1440px)': {
          
        },
    }),
    menuList: (provided) => ({
      ...provided,
      margin: '8px 4px 8px 0',
      '&::-webkit-scrollbar': {
        backgroundColor: 'white',
        width: '6px',
        height: '93px',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#E7E5E5',
        height: '93px',
        borderRadius: '12px',
      },
    }),
  };

  const renderInputs = () => {
    return Array.from({ length: counter }, (_, i) => (
      <InputsContainer key={i}>
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
                menuPosition={'fixed'}
                isSearchable
              />
            )}
          />
          <ErrorMessage name="ingredients" />
        <MeasureContainer
          ofLength={values.ingredients[i]?.quantity?.toString().length}
        >
            <NumberInput
              name={`ingredients[${i}].quantity`}
              type="number"
              min="0"
              as={NumberInput}
            ofLength={values.ingredients[i]?.quantity?.toString().length}
            />
            <ErrorMessage name="ingredients" />
            <UnitInput
              name={`ingredients[${i}].measure`}
              type="text"
              component=
              {({ field, form }) => (
                <CustomSelect
                  ofType="measure"
                  placeholder="kg"
                options={preparedMeasures}
                value={preparedMeasures.find(
                  option => option.value === field.value
                )}
                onChange={option => {
                  form.setFieldValue(field.name, option.value);
                }}
                onBlur={field.onBlur}
                menuPosition={'fixed'}
                isSearchable={false}
              />
            )}
            />
            <ErrorMessage name="ingredients" />
          </MeasureContainer>
          <DeleteBtn type="button" data-id={i} onClick={() => deleteInputByIndex(i)}><CrossIcon/></DeleteBtn>
      </InputsContainer>
    ));
  };

  return (
    <IngredientsFieldsContainer>
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
    </IngredientsFieldsContainer>
  );
}
