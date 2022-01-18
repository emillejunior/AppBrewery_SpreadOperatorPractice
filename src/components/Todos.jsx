import React from "react";

function Todos({ todos }) {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todos;
