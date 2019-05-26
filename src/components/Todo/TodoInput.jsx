import React, { useState } from "react";

function TodoInput(props) {
  const [text, setText] = useState("");

  const updateText = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text !== "") {
      props.addTodo(text);
    }
    setText("");
  };

  return (
    <div className="input">
      <div>
        <i
          className={`fas fa-chevron-down ${props.isHidden && "hide"} ${!(
            props.todoCount < props.length
          ) && "fade"}`}
          onClick={props.markAll}
        />
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={updateText}
        />
      </form>
    </div>
  );
}

export default TodoInput;
