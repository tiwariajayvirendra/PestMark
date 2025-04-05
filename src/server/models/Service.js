const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Cockroaches', 'Rodents', 'Termites', 'Mosquitoes', 'Lizards', 'Fireflies', 'Other'],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  duration: {
    type: String,
    required: true,
    description: 'Estimated duration of the service (e.g., "2 hours")',
  },
  image: {
    type: String,
    required: true,
  },
  dangers: [{
    type: String,
    required: true,
  }],
  solutions: [{
    type: String,
    required: true,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt timestamp before saving
serviceSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service; 