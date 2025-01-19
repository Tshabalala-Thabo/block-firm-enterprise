import React from 'react';

const PrimaryButton = ({ children, onClick = () => {}, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-brown-primary 
        text-white 
        font-semibold 
        py-2 px-4 
        rounded-md  
        hover:bg-brown-secondary 
        transition-colors 
        duration-200 
        focus:outline-none 
        focus:ring-2 
        focus:ring-brown-accent 
        focus:ring-opacity-50
        disabled:opacity-50 
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;