import React from 'react';
import { useQuizContext } from '@/app/lib/QuizContext';

export default function StatsNav() {
  const { userData } = useQuizContext();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 col-span-2 bg-orange-400">
      <div className="name__contain">
        <h2>{userData.firstName} {userData.lastName}</h2>
      </div>
      <div className="">
        <div className="questions__wrap">
          <p>Question 8/12</p>
        </div>
      </div>
    </div>
  )
}