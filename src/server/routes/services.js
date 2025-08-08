const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Helper function to check if user is admin
const isAdmin = async (req) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return false;
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findByPk(decoded.id);
    return user && user.role === 'admin';
  } catch (error) {
    return false;
  }
};

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.findAll({ 
      where: { isActive: true },
      order: [['name', 'ASC']]
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get service by ID
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new service (admin only)
router.post('/', async (req, res) => {
  try {
    const adminCheck = await isAdmin(req);
    if (!adminCheck) {
      return res.status(403).json({ message: 'Admin access required' });
    }

    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update service (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const adminCheck = await isAdmin(req);
    if (!adminCheck) {
      return res.status(403).json({ message: 'Admin access required' });
    }

    const updates = Object.keys(req.body);
    const allowedUpdates = [
      'name',
      'description',
      'category',
      'price',
      'duration',
      'image',
      'dangers',
      'solutions',
      'isActive',
      'features',
      'requirements',
      'warranty'
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).json({ message: 'Invalid updates' });
    }

    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    updates.forEach((update) => (service[update] = req.body[update]));
    await service.save();

    res.json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete service (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const adminCheck = await isAdmin(req);
    if (!adminCheck) {
      return res.status(403).json({ message: 'Admin access required' });
    }

    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // Soft delete by setting isActive to false
    service.isActive = false;
    await service.save();

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get services by category
router.get('/category/:category', async (req, res) => {
  try {
    const services = await Service.findAll({
      where: {
        category: req.params.category,
        isActive: true,
      },
      order: [['name', 'ASC']]
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search services
router.get('/search/:query', async (req, res) => {
  try {
    const { Op } = require('sequelize');
    const services = await Service.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${req.params.query}%` } },
          { description: { [Op.like]: `%${req.params.query}%` } },
        ],
        isActive: true,
      },
      order: [['name', 'ASC']]
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 