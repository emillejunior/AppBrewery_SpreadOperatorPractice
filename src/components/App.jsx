import React, { useState } from "react";
import Todos from "./Todos";
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [task, setTask] = useState("New Task");
  const [todos, setTodos] = useState(["Item 1", "Item 2", "Item 3"]);

  function handleChange(e) {
    console.log("changed");
    console.log(task);
    setTask(e.target.value);
  }
  function handleClick(e) {
    console.log("clicked");
    setTodos([...todos, task]);
    setTask("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={task} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
