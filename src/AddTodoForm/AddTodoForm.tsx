import React, { useState } from "react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
           onClick={e => {
            e.preventDefault();
            if (text === "") {
              alert("Input must be filled out");
            } else {
              addTodo(text);
              setText("");
            }
          }}
          >
          Add Todo
        </button>
      </form>
    </div>
  );
};
