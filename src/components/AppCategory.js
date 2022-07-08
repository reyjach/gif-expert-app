import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AppCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const hadleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length >2){
      setCategories( cat => [inputValue,...cat]);
      setInputValue('');
    }
    
  }

  return (
      <form onSubmit={ hadleSubmit }>
        <input 
          type='text'
          value={inputValue}
          onChange={ hadleInputChange }
        />
      </form>
  )
}

AppCategory.propTypes = {
  setCategories:PropTypes.func.isRequired
}
