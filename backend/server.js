const express = require('express');
const taskController = require('./controllers/taskController');

const app = express();
app.use(express.json());

app.get('/api/tasks', taskController.getTasks);
app.post('/api/tasks', taskController.createTask);
app.delete('/api/tasks/:id', taskController.deleteTask);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
