import React from 'react';
import {  useSelector } from 'react-redux';
import {  selectData } from '../features/counterSlice';


export default function Service2() {
    
  const data = useSelector(selectData);
  return (
    <div>
      <h1>Data at Service 2: <span className='text-red-500 font-bold text-lg'>{data}</span></h1>
    </div>
  )
}
