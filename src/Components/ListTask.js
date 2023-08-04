import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const ListTask = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(ListTask);
