import React, { useState, useMemo } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  const expensiveResult = useMemo(() => count * 2, [count]);

  return (
    <div>
      <p>
        Count:
        {count}
      </p>
      <p>
        Expensive Result:
        {expensiveResult}
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default ExampleComponent

export const Memo=()=> {
    const[num,setNum]=useState(0)
    const increaseNumber=()=>{
        setNum(num+1)
    }
    const myMemos=useMemo(()=>(
        num*5,[num])
    )
  return (
    <div>
        <p>{num}</p>
        <button onClick={increaseNumber}>Click</button>
        <p>{myMemos}</p>
    </div>
  )
}
