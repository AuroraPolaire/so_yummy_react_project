import { useFormikContext } from 'formik';
import React, { useState } from 'react'
import { IngredientsFieldsHeader } from './RecipeIngredientsFields.styled';

export default function RecipeIngredientsFields() {
    const [counter, setCounter] = useState(0);
    const { values, setFieldValue } = useFormikContext();

    function handleInputChange(index, e) {
        const newValues = [...values.ingredients];
        newValues[index].name = e.target.value;
        setFieldValue('ingredients', newValues);
    }

    const incrementCounter = () => {
        setCounter((prevState) => prevState + 1);
        setFieldValue("ingredients", [
            ...values.ingredients,
            { name: "", quantity: "" },
        ]);
    };
    
    const decrementCounter = () => {
        setCounter(prevState => prevState > 0 ? prevState - 1 : prevState);
        setFieldValue("ingredients", [
        ...values.ingredients.slice(0, counter - 1),
        ...values.ingredients.slice(counter)
        ]);
    };

    const renderInputs = () => {
    return Array.from({ length: counter }, (_, i) => (
      <div key={i}>
        <select
          value={values.ingredients[i].name}
          onChange={(e) => handleInputChange(i, e)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    ));
  };

  return (
    <div>
      <IngredientsFieldsHeader>
              <h2>Ingredients</h2>
              <button type='button' onClick={decrementCounter} disabled={counter === 0}>-</button>
              <p>{counter}</p>
              <button type='button' onClick={incrementCounter}>+</button>
      </IngredientsFieldsHeader>
        <div>
              {renderInputs()}
      </div>
    </div>
  )
}
