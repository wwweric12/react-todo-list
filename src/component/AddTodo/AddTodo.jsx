import React, { useState } from "react";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleAddForm = (e) => {
    e.preventDefault();
  };

  const handleText = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    if (text.trim().length === 0) {
      return;
    }
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleAddForm} className={styles.addform}>
      <input
        className={styles.addinput}
        type="text"
        onChange={handleText}
        placeholder="Add list"
        value={text}
      />
      <button type="submit" onClick={handleClick} className={styles.addbutton}>
        add
      </button>
    </form>
  );
}
