import React, { useState } from "react";
import FruitsList from "./fruirsList";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { myReducer } from "../reducers/red";

const myStore = createStore(myReducer);

function AppFruits(props) {
  let [fruits_ar] = useState(["mango", "apple", "kiwi"]);

  // let [chooseFruit, setFruitChoose] = useState("");

  return (
    <Provider store={myStore}>
      <div className="container">
        <h1>Fruits list</h1>
        <FruitsList fruits_ar={fruits_ar} />
      </div>
    </Provider>
  );
}

export default AppFruits;
