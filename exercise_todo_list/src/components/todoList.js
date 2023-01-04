import React from "react";

function TodoList() {
  return (
    <div className="col-md-7">
      {/* Eaxmple to  item in list*/}
      <div className="border shadow-sm my-2 p-2">
        <button className="btn btn-danger float-end">X</button>
        <h3>Go to work - 13:00</h3>
      </div>
    </div>
  );
}

export default TodoList;
