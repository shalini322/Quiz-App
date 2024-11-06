import React, {useState} from 'react';
import qBank from './components/questionBank';
import Question from './components/question';
import Score from './components/score';
import "./App.css";

function App() {
  const [questionBank] = useState(qBank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === questionBank[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionBank.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(""); 
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div className='Container'>
      <div className='heading'>QUIZ APP</div>
      {!quizEnd ? (
        <Question
          onOptionChange={handleOptionChange}
          selectedOption={selectedOption}
          onSubmit={handleOnSubmit}
          question={questionBank[currentQuestion]}
        />  
      ) : (
        <Score score={score} onNextQuestion={handleNextQuestion} />  
      )}
    </div>
  );
}

export default App;
