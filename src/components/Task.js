// src/components/Task.js

import React, { useState } from "react";

const Task = ({ task, updateTask, deleteTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    updateTask({
      ...task,
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  const handleMarkAsDone = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div className="task-header">
        <h2 onClick={toggleExpand}>{task.title}</h2>
        <button onClick={handleMarkAsDone}>
          {task.completed ? "Undo" : "Done"}
        </button>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
      {isExpanded && (
        <div className="task-details">
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              ></textarea>
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div>
              <p>{task.description}</p>
              <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
