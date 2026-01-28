const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'tasks.json');

app.use(cors());
app.use(express.json());

// serve frontend
app.use(express.static(path.join(__dirname, '../Frontend')));

// read tasks
function readTasks() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

// write tasks
function writeTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

// GET tasks
app.get('/tasks', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// POST task
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'Task required' });
  }

  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    title: title.trim()
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
