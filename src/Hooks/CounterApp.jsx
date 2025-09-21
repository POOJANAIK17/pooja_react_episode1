import React from 'react'
import { useCalc } from './useCalc'

function CounterApp() {
    const [number, addNumber, minusNumber, setToZero] = useCalc(10);
  return (
    <>
        <button onClick={addNumber}>Add</button>
        <button onClick={minusNumber}>Subtract</button>
        <button onClick={setToZero}>Reset Counter</button>
        <div>{number}</div>
    </>
  );
}

export default CounterApp;