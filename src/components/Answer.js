import React from 'react';

function Answer({ question, answer }) {
  return (
    <div className="answer">
      <h2>Ваш вопрос:</h2>
      <p>"{question}"</p>
      <h2>Ответ:</h2>
      <p>{answer}</p>
    </div>
  );
}

export default Answer;
