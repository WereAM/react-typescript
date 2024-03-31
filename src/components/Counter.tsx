import React, { useState } from 'react';

// type CounterProps = {
//   initialCount : number;
// }

const Counter = ({initialCount}:CounterProps) => {

    const buttons = [-1, +1, -50, +50, -100, +100];

    const [counter, setCounter] = useState<number>(initialCount);
    

    // delay continues from its previous counter value
    const delayedCount = () => setTimeout(() => setCounter(counter + 1), 2000);

    // delay continues from new counter value
    const continueCount = () => setTimeout(() => setCounter((counter) => counter + 1), 2000);

    // const user = {
    //   firstName : "Michelle",
    //   lastName : "Were",
    //   role : "Student",
    // }
    // console.log(user.role);

  return (
    <>
        <div>Counter {counter}</div>
        <br/>
        {buttons.map((value) => (
        <button onClick={() => setCounter(counter + value)}> {value}</button>))}
        <br/>
        <button onClick={delayedCount}> Delayed +1 </button>
        <br/>
        <button onClick={continueCount}> Continue +1 </button>
    </>
  
  )
}

export default Counter;




// use .map func to dynamically create setCount buttons -1, +1, -50, +50, -100, +100