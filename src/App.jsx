import { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';
 
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskStatus = (id) => { 
    setTasks(tasks.map(task=> task.id ===id ? {...task, completed: !task.completed} : task))
  }

  return (
    <>
      <h1>Lista de tareas</h1>
    <AddTaskForm addTask={addTask} />
    <ul className='taskList'>
      {tasks.map(task => (
        <Task task = {task} id={task.id} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
      ))}
    </ul>
    </>
  );
};

export default App;
