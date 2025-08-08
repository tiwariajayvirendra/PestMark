const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const CookieConsent = sequelize.define('CookieConsent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sessionId: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  ipAddress: {
    type: DataTypes.STRING(45), // IPv6 compatible
    allowNull: true
  },
  userAgent: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  consentGiven: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  consentDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  consentVersion: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '1.0'
  },
  preferences: {
    type: DataTypes.JSON,
    allowNull: true,
    comment: 'Stores user cookie preferences (necessary, analytics, marketing)'
  },
  lastUpdated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'cookie_consents',
  indexes: [
    {
      fields: ['sessionId']
    },
    {
      fields: ['userId']
    },
    {
      fields: ['consentGiven']
    }
  ]
});

module.exports = CookieConsent;
