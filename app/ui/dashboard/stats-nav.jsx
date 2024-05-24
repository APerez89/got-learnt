import React, { useContext } from 'react';
import { QuizContext } from '@/app/lib/QuizContext';

export default function StatsNav() {
  const { userData } = useContext(QuizContext);

  const statsNavStyles = {
    backgroundColor: 'var(--sonic)',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.3)'
  };
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 col-span-2 text-slate-200 rounded-md" style={statsNavStyles}>
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