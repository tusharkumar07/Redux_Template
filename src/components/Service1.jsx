import React from 'react';
import {  useSelector } from 'react-redux';
import {  selectCount } from '../features/counterSlice';


export default function Service1() {
  
  const count = useSelector(selectCount);
  return (
    <div>
      <h1>Counter at Service 1: <span className='text-red-500 font-bold text-lg'>{count}</span></h1>
    </div>
  )
}
