import './App.css';
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <div className="input-wrapper">
        <input type="text" name="todo" placeholder="Create a new todo" />
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className='add-button'>Add</button>
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
