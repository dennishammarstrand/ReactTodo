import React from "react";
import "./index.css";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
      </header>
      <Todo />
      <footer>
        <p>Double-click to edit a todo</p>
        <p>
          Created by Dennis Hammarstrand{" "}
          <a href="https://github.com/dennishammarstrand/ReactTodo">
            <i className="fab fa-github" />
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
