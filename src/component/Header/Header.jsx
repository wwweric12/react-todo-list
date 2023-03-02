import React from "react";
import styles from "./Header.module.css";
import { BiSun, BiMoon } from "react-icons/bi";
import { useDarkMode } from "../../context/DarkModeContext";
export default function Header({ onFilter, filter }) {
  const handleAll = () => {
    onFilter("all");
  };
  const handleActive = () => {
    onFilter("active");
  };
  const handleComplete = () => {
    onFilter("completed");
  };
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.darkModeButton} onClick={toggleDarkMode}>
        {darkMode && <BiSun />}
        {!darkMode && <BiMoon />}
      </button>
      <button
        className={`${styles.button} ${filter == "all" && styles.selected}`}
        onClick={handleAll}
      >
        All
      </button>
      <button
        className={`${styles.button} ${filter == "active" && styles.selected}`}
        onClick={handleActive}
      >
        Active
      </button>
      <button
        className={`${styles.button} ${
          filter == "completed" && styles.selected
        }`}
        onClick={handleComplete}
      >
        Complete
      </button>
    </header>
  );
}
