import React, { useState } from 'react'
import { posttodo } from './post'
import { patchtodo } from './patch'
import { deletetodo } from './deletetodo'
import { puttodo } from './put'


const Button = ({buttontext,clickHandler}) => {
  

 
  return (
    <div>
      <button
      onClick={clickHandler}
      className='h-10 border p-2  font-bold hover:hover:bg-gray-500 hover:bg-blue-400 hover:border-orange-300 rounded-2xl mt-10 ml-4 bg-black text-gray-50 cursor-grabbing'>{buttontext}</button>
    </div>
  )
}

export default Button
