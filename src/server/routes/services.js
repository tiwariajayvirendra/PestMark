const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const { auth, checkRole } = require('../middleware/auth');

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get service by ID
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new service (admin only)
router.post('/', auth, checkRole(['admin']), async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update service (admin only)
router.patch('/:id', auth, checkRole(['admin']), async (req, res) => {
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
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).json({ message: 'Invalid updates' });
  }

  try {
    const service = await Service.findById(req.params.id);
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
router.delete('/:id', auth, checkRole(['admin']), async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
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
    const services = await Service.find({
      category: req.params.category,
      isActive: true,
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search services
router.get('/search/:query', async (req, res) => {
  try {
    const services = await Service.find({
      $or: [
        { name: { $regex: req.params.query, $options: 'i' } },
        { description: { $regex: req.params.query, $options: 'i' } },
      ],
      isActive: true,
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 