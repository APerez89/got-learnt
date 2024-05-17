import React from 'react';

const Button = ({ btnMsg, onClick, disabled, type }) => {
  let buttonClass = "py-4 px-16 rounded-full shadow-2xl hover:shadow-xl transition-all text-base text-slate-100";
  
  // Add additional classes based on the disabled state
  if (disabled) {
    buttonClass += " bg-gray-500 cursor-not-allowed"; // Apply disabled styles
  } else {
    buttonClass += " bg-blue-600 hover:bg-blue-700"; // Apply default styles
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