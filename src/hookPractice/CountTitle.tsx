import React, { useState, useEffect } from 'react';

const CountTitle = () => {
  const [count, setCount] = useState(0);

  // Update the document title whenever the count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // This effect will run every time the count changes

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </div>
  );
};

export default CountTitle;
