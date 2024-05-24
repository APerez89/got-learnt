// 'use client';
import React, { useContext, useState } from 'react';
import { QuizContext } from '../../lib/QuizContext';
import Button from '../button';

const Cards = () => {
  const { quizData } = useContext(QuizContext);
  const { questions } = quizData;
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelecetedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
  });
  const { question, options, correctAnswer } = questions[activeQuestion];
  const pointsPerAnswer = 100 / questions.length;
  const maxScore = questions.length * pointsPerAnswer;

  // Select & check answer
  const onSelected = (option, key) => {
    setChecked(true);
    setSelecetedAnswerIndex(key);

    if (key === correctAnswer) {
      setSelectedAnswers(true);
    } else {
      setSelectedAnswers(false);
    }
  }
  const prevQuestion = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  }
  // Go to next question && calculate score if answer is correct
  const nextQuestion = () => {
    console.log('clicked');
    setSelecetedAnswerIndex(null);
    setResult((prev) => 
      selectedAnswers
        ? {
          ...prev,
          score: prev.score + pointsPerAnswer,
          correctAnswers: prev.correctAnswers + 1,
        }
        : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  }

  return (
    <div className="quiz-contain">
      <h2>Here comes the quiz</h2>
      <h3>
        Question: {activeQuestion + 1}
        / <span>{questions.length}</span>
      </h3>
      <div>
        {!showResult ? (
          <div className="quiz-res">
            <h3>{questions[activeQuestion].question}</h3>
            {Object.entries(options).map(([key, optionText]) => (
              <li
                key={key}
                onClick={() => onSelected(optionText, key)}
                className={
                  selectedAnswerIndex === key ? 'selected' : 'hover'
                }
              >
                <span>{ optionText }</span>
              </li>
            ))}
            {activeQuestion > 0 && (
              <Button 
                btnMsg='previous'
                onClick={prevQuestion}
                className='btn pointer'
              />
            )}
            <Button
              btnMsg={activeQuestion === questions.length - 1 ? 'Finish' : 'Next' }
              onClick={nextQuestion}
              disabled={!checked}
              className={checked ? 'btn pointer' : 'btn-disabled'}
            />
          </div>
        ) : (
          <div className="quiz-res">
            <h3>Results</h3>
            <h3>Score: {Math.floor((result.score / maxScore) * 100)} %</h3>
            <h3>{result.correctAnswers}</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cards;