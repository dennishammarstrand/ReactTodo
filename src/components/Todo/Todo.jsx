import React, { useReducer } from "react";
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

const saveToLocalStorage = state => {
  localStorage.clear();
  localStorage.setItem("todos", JSON.stringify(state));
};

const actionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!state) {
        return [action.payload];
      }
      const add = [...state, action.payload];
      saveToLocalStorage(add);
      return add;
    case "REMOVE_TODO":
      const remove = state.filter(todo => todo.id !== action.payload);
      saveToLocalStorage(remove);
      return remove;
    case "MARK_TODO":
      const mark = state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      saveToLocalStorage(mark);
      return mark;
    case "MARK_ALL":
      const markAll = state.map(todo => {
        todo.completed = true;
        return todo;
      });
      saveToLocalStorage(markAll);
      return markAll;
    case "UNMARK_ALL":
      const unmarkAll = state.map(todo => {
        todo.completed = !todo.completed;
        return todo;
      });
      saveToLocalStorage(unmarkAll);
      return unmarkAll;
    case "CLEAR":
      const clear = state.filter(todo => todo.completed !== true);
      saveToLocalStorage(clear);
      return clear;
    case "UPDATE_TODO":
      const update = state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
      saveToLocalStorage(update);
      return update;
    default:
      break;
  }
};

function Todo() {
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [state, dispatchAction] = useReducer(
    actionReducer,
    localStorage.getItem("todos") === null
      ? []
      : JSON.parse(localStorage.getItem("todos"))
  );

  const addTodo = text => {
    dispatchAction({
      type: "ADD_TODO",
      payload: { text: text, completed: false, id: Math.random(0, 2000) }
    });
  };

  const updateTodo = todo => {
    dispatchAction({
      type: "UPDATE_TODO",
      payload: todo
    });
  };

  const remove = todoId => {
    dispatchAction({ type: "REMOVE_TODO", payload: todoId });
  };

  const markComplete = todoId => {
    dispatchAction({ type: "MARK_TODO", payload: todoId });
  };

  const markAll = () => {
    if (CompletedTodos() < state.length) {
      dispatchAction({ type: "MARK_ALL" });
    } else {
      dispatchAction({ type: "UNMARK_ALL" });
    }
  };

  const clear = () => {
    dispatchAction({ type: "CLEAR" });
  };

  function CompletedTodos() {
    let count = 0;
    state.forEach(t => {
      if (t.completed === true) {
        count++;
      }
    });
    return count;
  }

  function Hide() {
    if (state.length < 1) {
      return true;
    }
    return false;
  }

  function TodoCount() {
    let count = 0;
    state.forEach(t => {
      if (t.completed === false) {
        count++;
      }
    });
    return count;
  }

  window.addEventListener("load", () => {
    dispatchFilter({
      type: "SHOW_" + window.location.hash.substring(2).toUpperCase()
    });
  });

  window.addEventListener("hashchange", () => {
    dispatchFilter({
      type: "SHOW_" + window.location.hash.substring(2).toUpperCase()
    });
  });

  const showAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };

  const showActive = () => {
    dispatchFilter({ type: "SHOW_ACTIVE" });
  };

  const showCompleted = () => {
    dispatchFilter({ type: "SHOW_COMPLETED" });
  };

  const filteredTodos = state.filter(todo => {
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
        length={state.length}
      />
      {filteredTodos.map((t, i) => (
        <TodoItem
          key={i}
          todo={t}
          remove={remove}
          markComplete={markComplete}
          updateTodo={updateTodo}
        />
      ))}
      <TodoAction
        isHidden={Hide()}
        todoCount={TodoCount()}
        clear={clear}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
        length={state.length}
      />
    </div>
  );
}

export default Todo;
