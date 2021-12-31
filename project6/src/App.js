import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [income, setIncome] = useState(0);

  if (count === 20) {
    return (
      <div>
        <h1>Your game has ended</h1>
        <p>At this point in your life your income is {income}</p>
        <button onClick={reset}>Click Me</button>
      </div>
    );
  }

  function reset() {
    setCount(0);
    setIncome(0);
  }

  function increase() {
    setCount(count + 1);
    setIncome(income + 1000);
  }

  return (
    <div>
      <p>You clicked {count} times.</p>
      <p>Your income is {income}</p>
      <button onClick={increase}>
        Click Me
      </button>
    </div>
  );
}

export default App;
