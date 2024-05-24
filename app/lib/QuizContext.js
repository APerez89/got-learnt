import React, { createContext, useState, useContext } from 'react';
import { forkLiftQuestions } from './data';

export const QuizContext = createContext('')

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