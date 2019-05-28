import React, { useState } from "react";

function TodoItem(props) {
  const [disabled, setDisabled] = useState(true);

  const onBlur = e => {
    e.preventDefault();
    const text = e.target.value;
    if (text !== "") {
      props.todo.text = text;
      props.updateTodo(props.todo);
    } else {
      props.remove(props.todo.id);
    }
    setDisabled(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    const text = e.target.firstChild.value;
    if (text !== "") {
      props.todo.text = text;
      props.updateTodo(props.todo);
    } else {
      props.remove(props.todo.id);
    }
    setDisabled(true);
  };

  return (
    <div className="todo">
      <div className="checkmark">
        <div
          className="circle"
          onClick={() => props.markComplete(props.todo.id)}
        >
          <i
            className={`fas fa-check fa-sm ${!props.todo.completed && "hide"}`}
          />
        </div>
      </div>
      <form onDoubleClick={() => setDisabled(!disabled)} onSubmit={onSubmit}>
        <input
          className={`${props.todo.completed && "line"}`}
          type="text"
          value={props.todo.text}
          disabled={disabled}
          onBlur={onBlur}
          onChange={e =>
            props.updateTodo({ ...props.todo, text: e.target.value })
          }
        />
      </form>
      <i className="fas fa-times" onClick={() => props.remove(props.todo.id)} />
    </div>
  );
}

export default TodoItem;
