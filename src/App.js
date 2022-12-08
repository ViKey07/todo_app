
import './App.css';
import { useState } from 'react';
import {Task} from './Task';
import Navbar from './Navbar';


function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const clearTask = (id) => {
    let key = todoList.filter((todo)=> todo.id === id)
    if(key[0].completed){
      setTodoList(todoList.filter((task) => task.id !== id));
    }else{
      setTodoList(todoList)
      alert('complete the task')
    }
    
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
  <div className='App'>
    <Navbar/>
    <div className='addTask'>
      <input placeholder='Enter Task' onChange={handleChange}/>
      <button id='addButton' onClick={addTask}> Add Task </button>
    </div>
    <div className='list'>
      {todoList.map((task) => {
        return <Task taskName = {task.taskName} id = {task.id} completed={task.completed} deleteTask = {deleteTask} clearTask={clearTask} completeTask={completeTask}/>;
      })}
    </div>
  </div>
  );
  
}

export default App;



