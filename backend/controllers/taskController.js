const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');

const Task = {
    loadTasks() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(JSON.parse(data));
            });
        });
    },

    saveTasks(tasks) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(tasks), 'utf8', (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    },

    updateTask(taskId, updatedTask) {
        return new Promise((resolve, reject) => {
            this.loadTasks()
                .then(tasks => {
                    const index = tasks.findIndex(task => task.id === taskId);
                    if (index !== -1) {
                        tasks[index] = { ...tasks[index], ...updatedTask };
                        this.saveTasks(tasks)
                            .then(() => resolve(true))
                            .catch(err => reject(err));
                    } else {
                        resolve(false);
                    }
                })
                .catch(err => reject(err));
        });
    },

    deleteTask(taskId) {
        return new Promise((resolve, reject) => {
            this.loadTasks()
                .then(tasks => {
                    tasks = tasks.filter(task => task.id !== taskId);
                    this.saveTasks(tasks)
                        .then(() => resolve())
                        .catch(err => reject(err));
                })
                .catch(err => reject(err));
        });
    }
};

module.exports = Task;
