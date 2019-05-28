import React from "react";
import "./index.css";
// import Nav from "./components/Nav/Nav";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        {/* <Nav /> */}
      </header>
      <Todo />
      <footer>
        <p>Double-click to edit a todo</p>
        <p>
          Created by Dennis Hammarstrand{" "}
          <a href="https://github.com/dennishammarstrand">
            <i className="fab fa-github" />
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
