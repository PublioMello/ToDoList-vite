import React from "react";
import TodoList from "./Components/ToDoList";
import Header from "./components/Header/Header";
import MainPage from "./components/Main-Page/MainPage";

const App = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <TodoList />
    </div>
  );
};

export default App;
