import React, { useState } from "react";
import FruitsList from "./fruirsList";
import { AppContext } from "../context/context";

function AppFruits(props) {
  let [fruits_ar] = useState(["mango", "apple", "kiwi"]);

  let [chooseFruit, setFruitChoose] = useState("");

  return (
    <div className="container">
      <h1>Fruits list</h1>
      <h2>Choosen Fruit: {chooseFruit}</h2>
      <AppContext.Provider value={{ setFruit: setFruitChoose }}>
        <FruitsList fruits_ar={fruits_ar} />
      </AppContext.Provider>
    </div>
  );
}

export default AppFruits;
