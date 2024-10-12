import React, { useState, useEffect, useRef } from 'react';
import QuestionInput from './QuestionInput';
import Answer from './Answer';
import './Magic8Ball.css';
import magicBallImage from '../assets/magic-ball.png'; 

const answers = [
  "Да", 
  "Нет", 
  "Возможно", 
  "Скорее всего", 
  "Определенно", 
  "Не думаю", 
  "Спросите позже", 
  "Точно да", 
  "Точно нет"
];

function Magic8Ball() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const inputRef = useRef(null); 

  const handleQuestionChange = (newQuestion) => {
    setQuestion(newQuestion);
  };

  const handleSubmit = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(randomAnswer);
    setShowAnswer(true);
  };

  useEffect(() => {
    if (showAnswer) {
      const timer = setTimeout(() => {
        setQuestion('');
        setAnswer(null);
        setShowAnswer(false);
        inputRef.current.focus(); 
      }, 10000); 

      return () => clearTimeout(timer); 
    }
  }, [showAnswer]);

  return (
    <div className="magic8ball">
      <h1>Магический Шар предсказаний</h1>
      <QuestionInput 
        question={question} 
        onQuestionChange={handleQuestionChange} 
        onSubmit={handleSubmit} 
        inputRef={inputRef} 
      />
      {showAnswer && (
        <div className="ball-container">
          <img src={magicBallImage} alt="Magic 8 Ball" className="magic-ball" />
          <Answer question={question} answer={answer} />
        </div>
      )}
    </div>
  );
}

export default Magic8Ball;
