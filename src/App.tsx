import React, { useState } from "react";
import { TodoList } from "./TodoList/TodoList";
import { AddTodoForm } from "./AddTodoForm/AddTodoForm";

const initialTodos: Todo[] = [
  {
    text: "Cleaning Room",
    complete: false,
  },
  {
    text: "Do work",
    complete: true,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <h1>Todos</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
