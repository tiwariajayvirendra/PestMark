const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { auth, checkRole } = require('../middleware/auth');

// Get all tasks (admin and employee only)
router.get('/', auth, checkRole(['admin', 'employee']), async (req, res) => {
  try {
    let tasks;
    if (req.user.role === 'admin') {
      tasks = await Task.find().populate('assignedTo', 'name email');
    } else {
      tasks = await Task.find({ assignedTo: req.user._id }).populate('assignedTo', 'name email');
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get task by ID
router.get('/:id', auth, checkRole(['admin', 'employee']), async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('assignedTo', 'name email');
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user has permission to view this task
    if (req.user.role === 'employee' && task.assignedTo._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to view this task' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new task (admin only)
router.post('/', auth, checkRole(['admin']), async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update task status (admin and assigned employee only)
router.patch('/:id/status', auth, checkRole(['admin', 'employee']), async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user has permission to update this task
    if (req.user.role === 'employee' && task.assignedTo.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this task' });
    }

    task.status = req.body.status;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update task details (admin only)
router.patch('/:id', auth, checkRole(['admin']), async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'title',
    'description',
    'service',
    'assignedTo',
    'scheduledDate',
    'priority',
    'status',
    'notes',
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).json({ message: 'Invalid updates' });
  }

  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete task (admin only)
router.delete('/:id', auth, checkRole(['admin']), async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.remove();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get tasks by status
router.get('/status/:status', auth, checkRole(['admin', 'employee']), async (req, res) => {
  try {
    let tasks;
    if (req.user.role === 'admin') {
      tasks = await Task.find({ status: req.params.status }).populate('assignedTo', 'name email');
    } else {
      tasks = await Task.find({
        status: req.params.status,
        assignedTo: req.user._id,
      }).populate('assignedTo', 'name email');
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get tasks by date range
router.get('/date-range', auth, checkRole(['admin', 'employee']), async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    let tasks;
    if (req.user.role === 'admin') {
      tasks = await Task.find({
        scheduledDate: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      }).populate('assignedTo', 'name email');
    } else {
      tasks = await Task.find({
        scheduledDate: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
        assignedTo: req.user._id,
      }).populate('assignedTo', 'name email');
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 