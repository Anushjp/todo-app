const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./tasks.db');

const Task = {
    saveTasks(tasks) {
        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT,
        created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`);

            const stmt = db.prepare('INSERT INTO tasks (description) VALUES (?)');
            tasks.forEach((task) => {
                stmt.run(task.description);
            });
            stmt.finalize();
        });
    },

    loadTasks(callback) {
        db.all('SELECT * FROM tasks', (err, rows) => {
            if (err) {
                console.error("Error reading tasks from database", err);
                callback([]);
            } else {
                callback(rows);
            }
        });
    },

    updateTask(taskId, updatedTask) {
        let tasks = this.loadTasks();
        const index = tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...updatedTask };
            this.saveTasks(tasks);
            return true;
        }
        return false;
    },

    deleteTask(taskId) {
        let tasks = this.loadTasks();
        tasks = tasks.filter(task => task.id !== taskId);
        this.saveTasks(tasks);
    }
};

module.exports = Task;
