import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuizContext } from '@/app/lib/QuizContext';
import Button from '../button';
import Input from './input';

const StartForm = ({ onSubmit }) => {
  const { handleSubmit, formState: { errors } } = useForm();
  const { setUserData } = useQuizContext();

  const onSubmitHandler = (data) => {
    setUserData({
      firstName: data.firstName,
      lastName: data.lastName,
    });
     // Pass form data to parent component
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className='text-gray-800 w-full max-w-md flex flex-col items-start'>
      <div className="w-full">
        <h2 className='text-xl text-blue-600 mb-14'>To Start, Please fill out the form.</h2>

        <div className="mb-8">
          <Input
            htmlFor={'firstName'}
            id={'firstName'}
            name={'First Name'}
            errors={errors}
          />
          <Input
            htmlFor={'lastName'}
            id={'lastName'}
            name={'Last Name'}
            errors={errors}
          />
        </div>
      </div>

      <div className='w-full flex justify-center items-center mt-14'>
        <Button
          btnMsg={'Start Quiz'}
          type={'submit'}
        />
      </div>
    </form>
  );
};

export default StartForm;