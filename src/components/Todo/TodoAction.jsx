import React, { useState, useEffect } from "react";

function TodoAction(props) {
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.hash);
  }, []);

  window.addEventListener("hashchange", () => {
    setLocation(window.location.hash);
  });

  return (
    <div className={`todo-actions ${props.isHidden && "display-none"}`}>
      <div className="todo-count">
        <p>
          <span>{props.todoCount}</span> item
          <span className={`${props.todoCount === 1 && "hide"}`}>s</span> left
        </p>
      </div>
      <div className="filters">
        <a
          onClick={props.showAll}
          href="#/All"
          className={`filter ${location === "#/All" && "active"}`}
        >
          All
        </a>
        <a
          onClick={props.showActive}
          href="#/Active"
          className={`filter ${location === "#/Active" && "active"}`}
        >
          Active
        </a>
        <a
          onClick={props.showCompleted}
          href="#/Completed"
          className={`filter ${location === "#/Completed" && "active"}`}
        >
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
