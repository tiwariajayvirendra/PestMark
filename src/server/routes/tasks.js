const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const User = require('../models/User');
const Service = require('../models/Service');
const jwt = require('jsonwebtoken');

// Helper function to get user from token
const getUserFromToken = async (req) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return null;
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findByPk(decoded.id);
    return user;
  } catch (error) {
    return null;
  }
};

// Get all tasks (admin and employee only)
router.get('/', async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user || !['admin', 'employee'].includes(user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    let tasks;
    if (user.role === 'admin') {
      tasks = await Task.findAll({
        include: [
          { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
          { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
        ],
        order: [['scheduledDate', 'ASC']]
      });
    } else {
      tasks = await Task.findAll({
        where: { assignedToId: user.id },
        include: [
          { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
          { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
        ],
        order: [['scheduledDate', 'ASC']]
      });
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get task by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user || !['admin', 'employee'].includes(user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const task = await Task.findByPk(req.params.id, {
      include: [
        { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
        { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
      ]
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user has permission to view this task
    if (user.role === 'employee' && task.assignedToId !== user.id) {
      return res.status(403).json({ message: 'Not authorized to view this task' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new task (admin only)
router.post('/', async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }

    const task = await Task.create(req.body);
    const taskWithAssociations = await Task.findByPk(task.id, {
      include: [
        { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
        { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
      ]
    });

    res.status(201).json(taskWithAssociations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update task status (admin and assigned employee only)
router.patch('/:id/status', async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user || !['admin', 'employee'].includes(user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user has permission to update this task
    if (user.role === 'employee' && task.assignedToId !== user.id) {
      return res.status(403).json({ message: 'Not authorized to update this task' });
    }

    task.status = req.body.status;
    if (req.body.status === 'completed') {
      task.completedDate = new Date();
    }
    await task.save();

    const updatedTask = await Task.findByPk(task.id, {
      include: [
        { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
        { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
      ]
    });

    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update task details (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }

    const updates = Object.keys(req.body);
    const allowedUpdates = [
      'title',
      'description',
      'serviceId',
      'assignedToId',
      'scheduledDate',
      'priority',
      'status',
      'notes',
      'customerName',
      'customerPhone',
      'customerAddress',
      'estimatedDuration',
      'actualDuration',
      'materials',
      'cost'
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).json({ message: 'Invalid updates' });
    }

    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    const updatedTask = await Task.findByPk(task.id, {
      include: [
        { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
        { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
      ]
    });

    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete task (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }

    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get tasks by status
router.get('/status/:status', async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user || !['admin', 'employee'].includes(user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    let tasks;
    if (user.role === 'admin') {
      tasks = await Task.findAll({
        where: { status: req.params.status },
        include: [
          { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
          { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
        ],
        order: [['scheduledDate', 'ASC']]
      });
    } else {
      tasks = await Task.findAll({
        where: {
          status: req.params.status,
          assignedToId: user.id,
        },
        include: [
          { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
          { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
        ],
        order: [['scheduledDate', 'ASC']]
      });
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get tasks by date range
router.get('/date-range', async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user || !['admin', 'employee'].includes(user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const { startDate, endDate } = req.query;
    const { Op } = require('sequelize');

    let tasks;
    if (user.role === 'admin') {
      tasks = await Task.findAll({
        where: {
          scheduledDate: {
            [Op.gte]: new Date(startDate),
            [Op.lte]: new Date(endDate),
          },
        },
        include: [
          { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
          { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
        ],
        order: [['scheduledDate', 'ASC']]
      });
    } else {
      tasks = await Task.findAll({
        where: {
          scheduledDate: {
            [Op.gte]: new Date(startDate),
            [Op.lte]: new Date(endDate),
          },
          assignedToId: user.id,
        },
        include: [
          { model: User, as: 'assignedTo', attributes: ['id', 'firstName', 'lastName', 'email'] },
          { model: Service, as: 'service', attributes: ['id', 'name', 'category'] }
        ],
        order: [['scheduledDate', 'ASC']]
      });
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 