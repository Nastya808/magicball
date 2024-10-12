import React from 'react';

function QuestionInput({ question, onQuestionChange, onSubmit, inputRef }) {
  const handleChange = (event) => {
    onQuestionChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (question.trim()) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={handleChange}
        placeholder="Задайте свой вопрос..."
        required
        ref={inputRef} 
      />
      <button type="submit">Спросить</button>
    </form>
  );
}

export default QuestionInput;
