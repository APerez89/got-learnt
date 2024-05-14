import React from 'react';

const Button = ({ btnMsg, onClick, disabled, type }) => {
  let buttonClass = "py-2 px-8 rounded-lg mx-4";
  
  // Add additional classes based on the disabled state
  if (disabled) {
    buttonClass += " bg-gray-400 cursor-not-allowed"; // Apply disabled styles
  } else {
    buttonClass += " bg-cyan-500 hover:bg-cyan-600"; // Apply default styles
  }

 return (
  <button
    onClick={onClick}
    className={buttonClass}
    disabled={disabled}
    type={type}
  >
    { btnMsg }
  </button>

 )
}

export default Button;