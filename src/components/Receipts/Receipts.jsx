import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";

const Receipts = () => {
  const [meal, setMeal] = useState("");
  return (
    <div>
      <h1>Receipts</h1>
      <input
        type="radio"
        value="плов"
        name="meal"
        onChange={(e) => setMeal(e.target.value)}
      />
      <label>Плов</label>

      <input
        type="radio"
        value="манты"
        name="meal"
        onChange={(e) => setMeal(e.target.value)}
      />
      <label>Манты</label>

      <input
        type="radio"
        value="пельмени"
        name="meal"
        onChange={(e) => setMeal(e.target.value)}
      />
      <label>Пельмени</label>
      <Ingredients meal={meal} />
    </div>
  );
};

export default Receipts;
