const express = require('express');
const app = express();
const port = 3000;

// Tasks array (number IDs, date objects)
const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date('2025-10-30T10:00:00') },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date('2025-10-30T12:00:00') },
  { id: 3, title: 'Write unit tests', completed: false, priority: 'low', createdAt: new Date('2025-10-31T09:30:00') },
  { id: 4, title: 'Set up CI/CD', completed: false, priority: 'medium', createdAt: new Date('2025-10-31T11:00:00') },
  { id: 5, title: 'Deploy to production', completed: false, priority: 'high', createdAt: new Date('2025-10-31T14:00:00') }
];

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Get task by ID
app.get('/task/:id', (req, res) => {
  const taskId = Number(req.params.id); // always convert to number
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

// Health route
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
