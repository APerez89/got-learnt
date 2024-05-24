import React, { useContext } from 'react';
import { QuizContext } from '@/app/lib/QuizContext';
import { useRouter } from 'next/navigation';
import Button from '../button';
import Input from './input';

const StartForm = () => {
  const { setUserData } = useContext(QuizContext);
  const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setUserData({
      firstName: firstName.value,
      lastName: lastName.value,
    });
    router.push('/dashboard');
     // Pass form data to parent component
  };

  return (
    <form onSubmit={onSubmitHandler} className='text-gray-800 w-full max-w-md flex flex-col items-start'>
      <div className="w-full">
        <h2 className='text-xl text-blue-600 mb-14'>To Start, Please fill out the form.</h2>

        <div className="mb-8">
          <Input
            htmlFor={'firstName'}
            id={'firstName'}
            name={'First Name'}
          />
          <Input
            htmlFor={'lastName'}
            id={'lastName'}
            name={'Last Name'}
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