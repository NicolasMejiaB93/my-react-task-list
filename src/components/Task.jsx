import React from 'react';

const Task = ({ task, handleToggleTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <label>
        Completada:
        <input type="checkbox" checked={task.completed} onChange={handleToggleTask} />
      </label>
    </div>
  );
};

export default Task;
