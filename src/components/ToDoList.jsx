import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../use-local-storage";
import "./ToDo.css";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useLocalStorage("todolist", []);
  const handleAddNewTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), text: newTodo, done: false }]);
    setNewTodo("");
  };
  const handleToggleTodo = (todoToToggle) => {
    const toggled = { ...todoToToggle, done: !todoToToggle.done };
    const rest = todos.filter((todo) => todo.id !== todoToToggle.id);
    if (toggled.done) {
      setTodos([...rest, toggled]);
    } else {
      setTodos([toggled, ...rest]);
    }
  };
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleAddNewTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggleTodo(todo)}
            />
            {todo.text}
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
