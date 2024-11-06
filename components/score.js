import React from 'react';
import '../App.css';
import qBank from './questionBank';

function Score({ score, onNextQuestion }) {
  return (
    <div className='scores'>
      <div className='result'>RESULT </div>
      <div className='score'>Your Score: {score} / {Array.isArray(qBank) ? qBank.length : 0}</div>
    </div>
  );
}

export default Score;
