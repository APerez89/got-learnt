import React, { useState } from 'react';

const StartForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the user data to the parent component
    onSubmit({ firstName, lastName });
  };

  return (
    <form onSubmit={handleSubmit} className='text-white'>
      <h2>To Start, Please fill out the form.</h2>

      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id='firstName'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id='lastName'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
    </form>
  );
};

export default StartForm;