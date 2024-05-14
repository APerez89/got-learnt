'use client';
import React, { useState } from 'react';
import StartForm from '../ui/form/form.jsx';
import Cards from '../ui/cards/cards.jsx';

export default function Page() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
  })
  const handleFormSubmit = (data) => {
    setUserData({
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to the dash baby!</h1>
      {!(userData. firstName && userData.lastName) && (
        <StartForm
          firstName={userData.firstName}
          lastName={userData.lastName}
          onSubmit={handleFormSubmit}
        /> /* handleFormSubmit passed as a prop */
      )}
      {userData.firstName && userData.lastName && (
        <Cards /> // quiz length passed as a prop
      )}
    </div>
  )
}