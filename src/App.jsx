import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import tasksData from './tasksData';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        name: newTask,
        description: 'Descripción de la tarea',
        completed: false,
      };

      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Las tareas de Nicolás</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Agregar tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <TaskList tasks={tasks} handleToggleTask={handleToggleTask} />
    </div>
  );
};

export default App;