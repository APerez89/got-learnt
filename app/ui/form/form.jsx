import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuizContext } from '@/app/lib/QuizContext';
import Button from '../button';

const StartForm = ({ firstName, lastName, onSubmit}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setUserData } = useQuizContext();

  const onSubmitHandler = (data) => {
    setUserData({
      firstName: data.firstName,
      lastName: data.lastName,
    })
     // Pass form data to parent component
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className='text-white'>
      <h2>To Start, Please fill out the form.</h2>

      <label htmlFor="firstName">First Name:</label>
      <input
        type='text'
        tabIndex='0'
        id='firstName'
        className='text-black'
        {...register('firstName', { required: true })} // Register this field with validation rule
        />
      {errors.firstName && <p className='error'>First Name is required</p>}
      <label htmlFor="lastName">Last Name:</label>
      <input
        type='text'
        tabIndex='0'
        id='lastName'
        className='text-black'
        {...register('lastName', { required: true })} // Register this field with validation rule
      />
      {errors.lastName && <p className='error'>Last Name is required</p>}

      <Button
        btnMsg={'Start Quiz'}
        type={'submit'}
      />
    </form>
  );
};

export default StartForm;