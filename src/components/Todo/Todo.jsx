import React, { useState, useReducer } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoAction from "./TodoAction";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_ACTIVE":
      return "ACTIVE";
    case "SHOW_COMPLETED":
      return "COMPLETED";
    default:
      break;
  }
};

function Todo() {
  const [todo, setTodo] = useState([]);
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");

  const addTodo = text => {
    setTodo(todos => [
      ...todos,
      { text: text, completed: false, id: todo.length }
    ]);
  };

  const remove = todoId => {
    setTodo(todo.filter(to => to.id !== todoId));
  };

  const markComplete = todoId => {
    setTodo(
      todo.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const markAll = () => {
    if (CompletedTodos() < todo.length) {
      setTodo(
        todo.map(t => {
          t.completed = true;
          return t;
        })
      );
    } else {
      setTodo(
        todo.map(t => {
          t.completed = !t.completed;
          return t;
        })
      );
    }
  };

  const clear = () => {
    setTodo(todo.filter(to => to.completed !== true));
  };

  function CompletedTodos() {
    let count = 0;
    todo.forEach(t => {
      if (t.completed === true) {
        count++;
      }
    });
    return count;
  }

  function Hide() {
    if (todo.length < 1) {
      return true;
    }
    return false;
  }

  function TodoCount() {
    let count = 0;
    todo.forEach(t => {
      if (t.completed === false) {
        count++;
      }
    });
    return count;
  }

  const showAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };

  const showActive = () => {
    dispatchFilter({ type: "SHOW_ACTIVE" });
  };

  const showCompleted = () => {
    dispatchFilter({ type: "SHOW_COMPLETED" });
  };

  const filteredTodos = todo.filter(todo => {
    if (filter === "ALL") {
      return true;
    }
    if (filter === "ACTIVE" && !todo.completed) {
      return true;
    }
    if (filter === "COMPLETED" && todo.completed) {
      return true;
    }
    return false;
  });

  return (
    <div className="container">
      <TodoInput
        isHidden={Hide()}
        addTodo={addTodo}
        markAll={markAll}
        todoCount={TodoCount()}
        length={todo.length}
      />
      {filteredTodos.map((t, i) => (
        <TodoItem
          key={i}
          todo={t}
          remove={remove}
          markComplete={markComplete}
        />
      ))}
      <TodoAction
        isHidden={Hide()}
        todoCount={TodoCount()}
        clear={clear}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
        length={todo.length}
      />
    </div>
  );
}

export default Todo;
