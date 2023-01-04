import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const todos_ar = useSelector((state) => state.todoSlice.todos_ar);
  return (
    <div className="col-md-7">
      {/* Eaxmple to  item in list*/}
      {todos_ar.map((item) => {
        return (
          <div key={item.id} className="border shadow-sm my-2 p-2">
            <button className="btn btn-danger float-end">X</button>
            <h3>
              {item.name} - {item.time}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
