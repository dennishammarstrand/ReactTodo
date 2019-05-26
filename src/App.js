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
    </>
  );
}

export default App;
