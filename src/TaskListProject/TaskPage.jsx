import { useState } from 'react';
import './TaskPage.scss';
import {Task} from "./Task"
function TaskPage() {
  const [todoList, setTodoList] = useState([]);
  const [NewTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (NewTask.trim() === "") return;
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: NewTask,
      status: false,
    }
    setTodoList([...todoList, task]);
    setNewTask("");
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task)=> task.id !== id));
  }

  const update = (id) => {
    const newList = todoList.map((task) => task.id === id ? {...task, status: true} : task);
    setTodoList(newList)
  }

  const clearTasks = () => {
    setTodoList([])
  }

  const clearCompleted = () => {
    setTodoList(todoList.filter((task) => task.status === false))
  }

  const clearOpenTasks = () => {
    setTodoList(todoList.filter((task) => task.status === true))
  }
  return (
    <div className="TaskPage">
    <div className='inputBox g10 flex-column'>
      <div className='flex g10 justify-between'>
        <input value={NewTask} onChange={handleChange}></input>
        <button className='shrink0' onClick={addTask}>Add Task</button>
      </div>
      <div className='flex g10 justify-between'>
        <button onClick={clearTasks}>Clear list</button>
        <button onClick={clearCompleted}>Clear Completed tasks</button>
        <button onClick={clearOpenTasks}>Clear Open tasks</button>
      </div>
    </div>
    <div className='List'>
    {todoList.map((task) => {
      return <Task 
        taskName={task.taskName} 
        id={task.id} 
        status={task.status}
        deleteTask={deleteTask}
        update={update}
        />;
    }) 
    }
    </div> 
    </div>
  );
}

export default TaskPage;
