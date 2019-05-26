import React from "react";

function TodoAction(props) {
  return (
    <div className={`todo-actions ${props.isHidden && "display-none"}`}>
      <div className="todo-count">
        <p>
          <span>{props.todoCount}</span> item
          <span className={`${props.todoCount === 1 && "hide"}`}>s</span> left
        </p>
      </div>
      <div className="filters">
        <a onClick={props.showAll} href="#/All">
          All
        </a>
        <a onClick={props.showActive} href="#/Active">
          Active
        </a>
        <a onClick={props.showCompleted} href="#/Completed">
          Completed
        </a>
      </div>
      <div className="clear">
        <button
          className={`${!(props.todoCount < props.length) && "hide"}`}
          onClick={props.clear}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoAction;
