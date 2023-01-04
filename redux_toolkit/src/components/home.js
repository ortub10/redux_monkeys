import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const couter = useSelector((state) => state.counterSlice.counter);
  return <div className="container">Home - {couter}</div>;
}
