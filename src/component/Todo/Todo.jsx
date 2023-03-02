import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.css";

export default function Todo({ filter }) {
  const [todo, setTodo] = useState(getItemTodo);

  const hanldeAddList = (item) => {
    const todos = { id: uuidv4(), text: item, status: "active" };
    setTodo([...todo, todos]);
  };
  const handleDeletedList = (item) => {
    setTodo(todo.filter((todo) => todo.id !== item.id));
  };
  const divideList = (result) => {
    setTodo(todo.map((item) => (item.id == result.id ? result : item)));
  };

  function list(item) {
    if (item === "all") {
      return todo;
    } else {
      return todo.filter((todo) => todo.status === item);
    }
  }
  const lists = list(filter);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        {lists.map((item) => (
          <TodoList
            key={item.id}
            todo={item}
            onDelete={handleDeletedList}
            onCheck={divideList}
          />
        ))}
      </ul>
      <AddTodo onAdd={hanldeAddList} />
    </section>
  );
}

const getItemTodo = () => {
  const todos = localStorage.getItem("todo");
  return todos ? JSON.parse(todos) : [];
};
