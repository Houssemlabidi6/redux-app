import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/tasksActions";
import "./AddTasl.css";
const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task description"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);
