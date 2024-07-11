import React from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm";

const App = () => {
  return (


    <div className="container">
      <h1 style={{fontSize: "100pt"}}>Task Management</h1>
      <TaskForm />
    </div>


  );
};

export default App;
