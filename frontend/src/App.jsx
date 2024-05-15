import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
    };

    const addTask = async (task) => {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        const data = await response.json();
        setTasks([...tasks, data]);
    };

    const deleteTask = async (id) => {
        await fetch(`/api/tasks/${id}`, {
            method: 'DELETE',
        });
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const updateTask = async (id, updatedTask) => {
        await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        });
        setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
    );
}

export default App;
