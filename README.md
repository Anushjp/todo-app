# Todo App

This is a simple Todo List application built using React for the frontend and Node.js with Express.js for the backend. The application allows users to create, read, update, and delete tasks. Tasks persist even after server restarts, and the entire application can be run using Docker.

## Features

- Create, read, update, and delete tasks.
- Tasks persist even after server restarts.
- Dockerized for easy deployment.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anushjp/todo-app.git

2. Navigate to the project directory:

    ```bash
    cd todo-app

3. Install dependencies for both frontend and backend:

    ```bash
    npm install
    cd frontend && npm install
    cd ../backend && npm install
    cd ..

## Running the Application

You can run the application locally using Docker Compose: **docker-compose up**

Once the containers are up and running, you can access the Todo App frontend at http://localhost:3000.

## Usage

- To add a new task, enter the task description in the input field and click "Add Task".
- To delete a task, click the "Delete" button next to the task.
- To update a task, click on the task description to edit it directly. Press Enter or click outside the input field to save the changes.
- Tasks will persist even after refreshing the page or restarting the server

## Project Structure

The project structure is as follows:

- `todo-app/` is the root directory of the project.
- Inside `todo-app/`, there are two main directories: `backend/` and `frontend/`.
- Inside `backend/`, there are `controllers/`, `models/`, `server.js`, and `package.json` files.
- Inside `frontend/`, there are `src/`, `vite.config.js`, `package.json` files, and subdirectories like `components/`.
- Inside `src/`, there are `components/`, `App.jsx` files.
- Inside `todo-app/`, there are `package.json`, and `docker-compose.yml` files.

## Backend Schema

Schema of the tasks table in the DB is as follows:

| Column       | Type      | Description                                    |
|--------------|-----------|------------------------------------------------|
| id           | INTEGER   | Primary key                                    |
| description  | TEXT      | Task description                               |
| created_date | TIMESTAMP | Default Current Timestamp of the task creation |

## Known Issues

- Occasionally, there might be delays in task updates reflecting in the frontend due to network latency. This issue is being actively investigated.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.
