import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function ToDoList() {
    const[tasks, setTasks] = useState([]);
    const[newTask, setNewTask] = useState();
    const [age, setAge] = React.useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value)

    }
    function addTask() {
        setTasks(tasks => [...tasks, newTask])
        setNewTask("")

    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);

    }
    function moveTaskUp(index) {

        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
    <div class="To-Do-List">

        <h1>To Do List!</h1>
        <div>
            <input
                type="text"
                placeholder="Enter a Task"
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>
        <ol>
            {tasks.map((task,index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                        className="up-button"
                        onClick={() => moveTaskUp(index)}>
                        Up
                    </button>
                    <button
                        className="down-button"
                        onClick={() => moveTaskDown(index)}>
                        Down
                    </button>
                </li>
            )}
        </ol>
    </div>)
}

export default ToDoList