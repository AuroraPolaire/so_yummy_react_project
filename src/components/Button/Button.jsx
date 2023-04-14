import React from 'react';

const Button = ({ title, background, color, borderColor }) => {
  return (
    <button
      background={background}
      color={color}
      // type={type}
      // borderColor={borderColor}
    >
      {title}
    </button>
  );
};

export default Button;
