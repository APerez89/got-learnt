import React, { createContext, useState, useContext } from 'react';
import { forkLiftQuestions } from './data';

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [quizData] = useState(forkLiftQuestions);
  const [userData, setUserData] = useState({ firstName: '', lastName: ''});

  const value = {
    quizData,
    userData,
    setUserData,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};