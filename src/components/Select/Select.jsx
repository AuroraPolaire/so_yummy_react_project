import React, { useState } from 'react';

export default function CustomSelect({ field, options, func, setFieldValue }) {
    const [size, setSize] = useState(1);

  function handleSelectMouseDown() {
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
        <select {...field} onMouseDown={handleSelectMouseDown}
            onBlur={resetSize}
            onChange={handleChange}
            size={size} >
            {func(options)}
    </select>
  )
}
