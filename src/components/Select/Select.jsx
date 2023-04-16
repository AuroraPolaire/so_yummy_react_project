import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

export default function CustomSelect({ field, options, func }) {
  const [size, setSize] = useState(1);
  const { setFieldValue } = useFormikContext();
  const selectRef = useRef(null);

  function handleSelectMouseDown() {
    const numOptions = selectRef.current.options.length;
    if (numOptions < 6) {
      return;
    }
    setSize(6);
  }

  function resetSize() {
    setSize(0);
    }
    
  function handleChange(event) {
        const selectedValue = event.target.value;
        setFieldValue(field.name, selectedValue);
        resetSize();
    }

  return (
      <div>
      <select
        {...field}
        ref={selectRef}
        onMouseDown={handleSelectMouseDown}
        onBlur={resetSize}
        onChange={handleChange}
        size={size}
      >
        {func(options)}
    </select>
      </div>
  )
}

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  func: PropTypes.func.isRequired,
}