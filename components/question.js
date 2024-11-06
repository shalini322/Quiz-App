import React from 'react';
import Options from './option';
import '../App.css';

function Question({ onOptionChange, selectedOption, onSubmit, question }) {
  return (
    <div className='question'>
      <h3>Question {question.id}</h3>
      <h5>{question.question}</h5>
      <form onSubmit={onSubmit}> 
        <Options 
          options={question.options}
          selectedOption={selectedOption}
          onOptionChange={onOptionChange}
        />
        <button type='submit' className='submit'>SUBMIT</button>
      </form>
    </div>
  );
}

export default Question;
