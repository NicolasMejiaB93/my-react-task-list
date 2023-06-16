import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleToggleTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} handleToggleTask={() => handleToggleTask(index)} />
      ))}
    </div>
  );
};

export default TaskList;

