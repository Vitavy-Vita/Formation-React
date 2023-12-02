import React from 'react';
import {useCounterProvider} from '../../context/CounterContext'

export default function Counter(props) {
    const value = useCounterProvider()

  return (
    <div className='flex  gap-2'>
        {value.counter}
        <button
        onClick={value.incrementeCounter}
         className='bg-green-500 px-4'> ++ </button>
        <button
        onClick={value.decrementeCounter}
        className='bg-red-500 px-4'> -- </button>
        <button
        onClick={value.clearCounter}
        className='bg-indigo-500 px-4'> Clear </button>
    </div>
  );
}