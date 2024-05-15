import React from 'react';

function TaskList({ tasks, deleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.description}
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
