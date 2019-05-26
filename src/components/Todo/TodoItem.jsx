import React from "react";

function TodoItem(props) {
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
      <form>
        <input
          className={`${props.todo.completed && "line"}`}
          type="text"
          defaultValue={props.todo.text}
          disabled
        />
      </form>
      <i className="fas fa-times" onClick={() => props.remove(props.todo.id)} />
    </div>
  );
}

export default TodoItem;
