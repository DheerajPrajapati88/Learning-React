import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";



function TodoList() {
  const [tasks, setTask] = useState([
    "Go to College",
    "Study time",
    "Go to market",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {

    if(newTask.trim()!==""){

        
            setTask(t=>[...t,newTask])
            setNewTask('')
    }
  }
  function deleteTask(index) {
  


    setTask(tasks.filter((_,i)=>i!==index))

  }
  function moveTaskUp(index) {

    if(index > 0){

        const updatedTasks=[...tasks];

        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
        setTask(updatedTasks)

    }
  }
  function moveTaskDown(index) {
    if(index  < tasks.length - 1 ){

        const updatedTasks=[...tasks];

        [updatedTasks[index+1],updatedTasks[index]]=[updatedTasks[index],updatedTasks[index+1]];
        setTask(updatedTasks)

    }
  }

  return (
    <div className="todo-list">
      <h1>To-Do-List</h1>
      <div className="input-field">
        <input
          autoFocus
          type="text"
          placeholder="Enter a task.."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          {" "}
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <MdDelete className="btn" onClick={() => deleteTask(index)}>
              Delete
            </MdDelete>
            <FaArrowUp className="btn" onClick={() => moveTaskUp(index)}>
              Up
            </FaArrowUp>
            <FaArrowDown className="btn" onClick={() => moveTaskDown(index)}>
              Down
            </FaArrowDown>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
