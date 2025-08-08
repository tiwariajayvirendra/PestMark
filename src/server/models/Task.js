const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./User');
const Service = require('./Service');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 200]
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'services',
      key: 'id'
    }
  },
  assignedToId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  status: {
    type: DataTypes.ENUM('pending', 'in_progress', 'completed', 'cancelled'),
    defaultValue: 'pending',
    allowNull: false
  },
  priority: {
    type: DataTypes.ENUM('low', 'medium', 'high', 'urgent'),
    defaultValue: 'medium',
    allowNull: false
  },
  scheduledDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  completedDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  customerName: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  customerPhone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  customerAddress: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  estimatedDuration: {
    type: DataTypes.INTEGER, // in minutes
    allowNull: true
  },
  actualDuration: {
    type: DataTypes.INTEGER, // in minutes
    allowNull: true
  },
  materials: {
    type: DataTypes.JSON,
    allowNull: true
  },
  cost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  }
}, {
  tableName: 'tasks',
  indexes: [
    {
      fields: ['status']
    },
    {
      fields: ['scheduledDate']
    },
    {
      fields: ['assignedToId']
    }
  ]
});

// Define associations
Task.belongsTo(User, { as: 'assignedTo', foreignKey: 'assignedToId' });
Task.belongsTo(Service, { as: 'service', foreignKey: 'serviceId' });

module.exports = Task; 