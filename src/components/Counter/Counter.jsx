import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const minus = () => {
    setCount(count - 1);
  };
  const plus = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{`Вы нажали ${count} раз(а)`} </p>
      <button onClick={() => minus()}>-</button>
      <button onClick={() => plus()}>+</button>
    </div>
  );
};

export default Counter;
