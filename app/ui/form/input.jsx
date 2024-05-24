import React from 'react';

const Input = ({ htmlFor, id, name, errors }) => {
  
  return (
    <div className='pt-6'>
      <label
        htmlFor={htmlFor}
        className=' text-sm font-medium leading-6 text-gray-500'>
          { name }
        </label>

      <input
        type='text'
        tabIndex='0'
        id={id}
        required
        className={`
          mt-1 block w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
        `}
      />
      {/* {errors[id] && <p className='error text-rose-600 mt-3'>{ name } is required</p>} */}
    </div>
  )
}

export default Input;