// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCount, multiply, square,selectData } from './features/counterSlice';
import Service1 from './components/Service1';
import Service2 from './components/Service2';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const data = useSelector(selectData);

  return (
    <div className='text-center flex flex-col justify-center items-center gap-2'>
    <div className='border-4 p-10 border-neutral-400'>
    <h1 className='mb-4'>Counter at App component: <span className='text-green-500 font-bold text-lg'>{count}</span></h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(increment())}>Increment</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
      
      <Service1 />
      

      {/* for second data */}
      <div className='border-4 p-10 border-neutral-400'>
      <h1 className='mb-4'>Data at App component: <span className='text-green-500 font-bold text-lg'>{data}</span></h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(multiply())}>Multiply</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(square())}>Square</button>
      </div>
      <Service2 />
    </div>
  );
}

export default App;
