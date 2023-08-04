import React from "react";
import { connect } from "react-redux";
import { toggleTask, editTask } from "../redux/tasksActions";
import "./Task.css";

const Task = ({ id, description, isDone, toggleTask, editTask }) => {
  const handleToggleTask = () => {
    toggleTask(id);
  };

  const handleEditTask = (newDescription) => {
    if (newDescription.trim() !== "") {
      editTask(id, newDescription);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        className="task-checkbox"
        checked={isDone}
        onChange={handleToggleTask}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => handleEditTask(e.target.value)}
      />
    </div>
  );
};

export default connect(null, { toggleTask, editTask })(Task);
