import { useState } from "react";


export default function ToDoList(){

const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState("");

function addTask(event) {
  event.preventDefault();
  if (newTask.trim()) {
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  }
}

function deleteTask(taskToDelete) {
  setTasks(tasks.filter((task) => task !== taskToDelete));
}
    return (
    <div className="container">
        <h1>To-Do List</h1>
        <form onSubmit={addTask}>
            <input
            type="text"
            value={newTask}
            placeholder="Add a new task"
            onInput={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
        <ul>
            {tasks.map((task) => (
            <li>
                {task}
                <button onClick={() => deleteTask(task)}>❌</button>
            </li>
            ))}
        </ul>
    </div>
    )
}



