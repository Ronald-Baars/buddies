import React, { useState, useEffect, useRef } from 'react';
import NextButton from 'components/common/NextButton';

import './style.css';

const Login = ({ onSubmit, placeholder, fullWidth = false, className = '' }) => {
  const inputEl = useRef();
  const [inputValue, setInputValue] = useState(false);

  // Focus on the input field
  useEffect(() => inputEl.current.focus(), []);

  // Saves the input value to the state
  const handleInput = (e) => setInputValue(e.target.value);

  // Fires when the user presses enter or clicks the send button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) onSubmit(inputValue);

    // Empty the input
    inputEl.current.value = "";
    setInputValue("");
  };

  return (
    <form
      className={`Input ${fullWidth ? 'Input-fullWidth' : ''} ${className}`}
      onSubmit={handleSubmit}
    >
      <input
        placeholder={placeholder}
        className="Input__field"
        ref={inputEl}
        onKeyUp={handleInput}
      />
      <NextButton disabled={!inputValue} />
    </form>
  );
};

export default Login;
