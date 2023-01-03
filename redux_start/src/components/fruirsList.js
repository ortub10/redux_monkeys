import React from "react";
import { useSelector } from "react-redux";
import FruitItem from "./fruitItem";

function FruitsList(props) {
  const chooseFruit = useSelector((state) => state.chooseFruit);
  return (
    <main>
      <h2>Choosen Fruit: {chooseFruit}</h2>
      <div className="col-lg-6 mx-auto">
        {props.fruits_ar.map((item) => {
          return <FruitItem key={item} name={item} />;
        })}
      </div>
    </main>
  );
}

export default FruitsList;
