'use client';
import React, { useState } from 'react';
import StartForm from '../ui/form/form.jsx';
import Cards from '../ui/cards/cards.jsx';

export default function Page() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
  })
  const [quizLength, setQuizLength] = useState(null) // Initially unset
  const handleFormSubmit = (data) => {
    setUserData({
      firstName: data.firstName,
      lastName: data.lastName,
    });
    setQuizLength(data.quizLength);
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to the dash baby!</h1>
      {!(userData. firstName && userData.lastName && quizLength) && (
        <StartForm
          firstName={userData.firstName}
          lastName={userData.lastName}
          onSubmit={handleFormSubmit}
        /> /* handleFormSubmit passed as a prop */
      )}
      {userData.firstName && userData.lastName && quizLength && (
        <Cards quizLength={quizLength} /> // quiz length passed as a prop
      )}
    </div>
  )
}