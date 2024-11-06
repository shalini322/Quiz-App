import React from 'react';
import '../App.css';

function Option({ options, selectedOption, onOptionChange }) {
  return (
    <div className="options">
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="options"
            checked={selectedOption === option}
            value={option}
            onChange={onOptionChange}
          />
          <label className="options-list">{option}</label>
        </div>
      ))}
    </div>
  );
}

export default Option;
