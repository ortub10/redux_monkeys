import React from "react";

import { useSelector } from "react-redux";

function Counter() {
  const counrter = useSelector((myStore) => myStore.counterSlice.counter);
  return (
    <div className="container">
      <h2>Counter: {counrter}</h2>
      <button>Add 1</button>
    </div>
  );
}

export default Counter;
