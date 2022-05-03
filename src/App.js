import "./App.css";
import React, { useRef, useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import { Header } from "./Header/Header";
import { AddToDo } from "./AddToDo/AddToDo";
import { ToDoLIst } from "./ToDoList/ToDoLIst";

function App() {
  const [todo, setToDo] = useState([
    {
      id: 1,
      title: "first ToDo",
      status: true,
    },

    {
      id: 2,
      title: "second ToDo",
      status: true,
    },

    {
      id: 3,
      title: "third ToDo",
      status: false,
    },
  ]);
  return (
    <div className="App">
      {/* <Header /> */}
      <AddToDo todo={todo} setToDo={setToDo} />
      <ToDoLIst todo={todo} setTodo={setToDo} />
    </div>
  );
}

export default App;
