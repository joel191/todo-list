// src/App.js

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <TaskList />
      </div>
    </Router>
  );
};

export default App;
