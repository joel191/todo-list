// src/components/TaskList.js

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Update import to useNavigate
import Task from "./Task";
import TaskForm from "./TaskForm";
import tasksData from "../tasks.json"; // Import dummy JSON data

const TaskList = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Update searchTerm based on URL query parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query") || "";
    setSearchTerm(query);
  }, [location.search]);

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Update URL with search query
  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    navigate(`?query=${newSearchTerm}`); // Use navigate instead of history.push()
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <TaskForm addTask={addTask} />
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
