"use client"
import React, { useState } from 'react';

const Mcq = () => {
  const questions = [
    {
      questionText: 'What is the capital of Brazil?',
      options: ['Rio de Janeiro', 'Brasília', 'Sao Paulo', 'Salvador'],
      correctAnswer: 'Brasília',
    },

    {
      questionText: 'In which year did World War II end?',
      options: ['1943', '1945', '1947', '1950'],
      correctAnswer: '1945',
    },

    {
      questionText: 'Who is the author of the play "Macbeth"?',
      options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Scott Fitzgerald'],
      correctAnswer: 'William Shakespeare',
    },

    {
      questionText: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Hg'],
      correctAnswer: 'Au',
    },

    {
      questionText: 'Who painted the famous work "Starry Night"?',
      options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Claude Monet'],
      correctAnswer: 'Vincent van Gogh',
    },

    {
      questionText: 'Which planet is known as the "Red Planet"?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },

    {
      questionText: 'What is the formula for calculating the area of a rectangle?',
      options: ['A = l + w', 'A = 2l + 2w', 'A = lw', 'A = l/w'],
      correctAnswer: 'A = lw',
    },

    {
      questionText: 'In which year did the United States declare its independence?',
      options: ['1773', '1776', '1789', '1792'],
      correctAnswer: '1776',
    },

    {
      questionText: 'What is the largest mammal on Earth?',
      options: ['Elephant', 'Blue whale', 'Giraffe', 'Polar bear'],
      correctAnswer: 'Blue whale',
    },

    {
      questionText: 'Who wrote the novel "To Kill a Mockingbird"?',
      options: ['J.K. Rowling', 'Harper Lee', 'George Orwell', 'Ernest Hemingway'],
      correctAnswer: 'Harper Lee',
    },
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleAnswerClick = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const newScore = userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    setScore(newScore);

    // here we are storing the data in the local storage
    localStorage.setItem('quizScore', newScore.toString());
  };

  return (
    <>
      <div className='text-center'>
        <h2>Quiz</h2>
        <h5>Be careful when filling out the form</h5>
      </div>

      {questions.map((question, index) => (
        <div key={index} className="container mt-sm-5 my-1">
          <div className="question ml-sm-5 pl-sm-5 pt-2">
            <div className="py-2 h5"><b>{`Q-${index + 1}. ${question.questionText}`}</b></div>
            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="options" style={{ margin: '10px' }}>
                  {`${option}`}
                  <input
                    type="radio"
                    name={`q${index + 1}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleAnswerClick(index, option)}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="container mt-sm-5 my-1">
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {score !== null && (
        <div className="container mt-sm-5 my-1">
          <div className="text-center">
            <h3>Your Score: {score} out of {questions.length}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Mcq;