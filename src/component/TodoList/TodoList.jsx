import React from "react";
import styles from "./TodoList.module.css";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TodoList({ todo, onDelete, onCheck }) {
  const { text, status, id } = todo;
  const deletedList = (item) => {
    onDelete(item);
  };
  const checkList = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onCheck({ ...todo, status });
  };

  return (
    <li className={styles.list}>
      <input
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={checkList}
        className={styles.checkbox}
      />
      <label
        className={`${styles.text} ${
          status == "completed" && styles.checked
        }  `}
        htmlFor={id}
      >
        {text}
      </label>
      <button className={styles.deletebutton} onClick={() => deletedList(todo)}>
        <RiDeleteBinLine />
      </button>
    </li>
  );
}
