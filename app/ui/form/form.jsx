import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuizContext } from '@/app/lib/QuizContext';

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
      <label>How many questions?</label>
      <div>
        <input
          type="radio"
          name="fullQuiz"
          value="full"
          {...register('quizLength', { required: true })}
        />
        <label htmlFor="fullQuiz"> full quiz</label>
      </div>
      <div>
        <input
          type="radio"
          name="halfQuiz"
          value="half"
          {...register('quizLength', { required: true })}
        />
        <label htmlFor="halfQuiz"> half quiz</label>
      </div>
      {errors.quizLength && <p className='error'>Please select quiz length</p>}

      <button type='submit'>Start Quiz</button>
    </form>
  );
};

export default StartForm;