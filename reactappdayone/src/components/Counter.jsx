import React from 'react'
import { useState } from 'react'



function Counter() {
    //data = to the variable name
    //setData  = this assign variable to the value declare
    //useState = vaule initailise

    const [data, setData] = useState(0);

    const incrementCount = () => {
        setData (data + 1);
    }
    const decrementCount = () => {
        setData (data - 1);
    }
    const resetCount = () => {
        setData (0);
    }

  return (
    <div className='counter-container'>
    <div>
        <h2>Counter App</h2>
    </div>
    <h1>{data}</h1>
    <div>
        <button className='incrementBtn' onClick={incrementCount}>Increase</button>
        <button className='resetBtn' onClick={resetCount}>Reset</button>
        <button className='decrementBtn' onClick={decrementCount}>Decrease</button>
    </div>
    </div>
  )
}

export default Counter;