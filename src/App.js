import "./App.css";
import Todo from "./component/Todo/Todo";
import { useState } from "react";
import Header from "./component/Header/Header";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";

const filters = ["all", "active", "complete"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  const handleFilter = (item) => {
    setFilter(item);
  };

  return (
    <DarkModeProvider>
      <Header onFilter={handleFilter} filter={filter} />
      <Todo filter={filter} />
    </DarkModeProvider>
  );
}
export default App;
