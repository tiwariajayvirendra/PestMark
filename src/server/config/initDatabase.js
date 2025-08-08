const { sequelize } = require('./database');
const User = require('../models/User');
const Service = require('../models/Service');
const Task = require('../models/Task');
const CookieConsent = require('../models/CookieConsent');

const initDatabase = async () => {
  try {
    // Sync all models with database
    await sequelize.sync({ force: false, alter: true });
    console.log('✅ Database tables synchronized successfully.');

    // Create default admin user if not exists
    try {
      const adminExists = await User.findOne({ where: { email: 'admin@pestmark.com' } });
      if (!adminExists) {
        await User.create({
          firstName: 'Admin',
          lastName: 'User',
          email: 'admin@pestmark.com',
          password: 'admin123',
          role: 'admin',
          phone: '1234567890',
          emailVerified: true
        });
        console.log('✅ Default admin user created.');
      }
    } catch (userError) {
      console.log('⚠️ Could not create admin user:', userError.message);
    }

    // Create default services if not exists
    try {
      const services = [
        {
          name: 'Cockroach Control',
          description: 'Effective solutions to eliminate cockroach infestations.',
          category: 'cockroach',
          price: 150.00,
          duration: '2-3 hours',
          image: '/images/cockroach1.webp',
          dangers: 'Cockroaches can spread diseases and contaminate food.',
          solutions: 'Professional treatment using safe pesticides and preventive measures.'
        },
        {
          name: 'Rodent Control',
          description: 'Professional rodent removal and prevention services.',
          category: 'rodent',
          price: 200.00,
          duration: '3-4 hours',
          image: '/images/rodent.webp',
          dangers: 'Rats and mice can damage property and spread diseases.',
          solutions: 'Comprehensive rodent control with traps and exclusion methods.'
        },
        {
          name: 'Termite Control',
          description: 'Comprehensive termite treatment and prevention.',
          category: 'termite',
          price: 500.00,
          duration: '4-6 hours',
          image: '/images/termite.webp',
          dangers: 'Termites can cause severe structural damage to buildings.',
          solutions: 'Professional termite treatment with long-term protection.'
        },
        {
          name: 'Mosquito Control',
          description: 'Mosquito control solutions for your outdoor spaces.',
          category: 'mosquito',
          price: 120.00,
          duration: '1-2 hours',
          image: '/images/mosquito.webp',
          dangers: 'Mosquitoes can transmit diseases like dengue and malaria.',
          solutions: 'Mosquito control using safe repellents and breeding prevention.'
        },
        {
          name: 'BedBug Control',
          description: 'Thorough bedbug elimination using heat treatment and targeted pesticides.',
          category: 'bedbug',
          price: 300.00,
          duration: '3-4 hours',
          image: '/images/bedbug.webp',
          dangers: 'Bedbugs can cause skin irritation and sleep disruption.',
          solutions: 'Heat treatment and chemical application for complete elimination.'
        },
        {
          name: 'Spider Control',
          description: 'Professional spider control services to eliminate unwanted arachnids.',
          category: 'spider',
          price: 100.00,
          duration: '1-2 hours',
          image: '/images/Spiders.webp',
          dangers: 'Some spiders can be venomous and pose health risks.',
          solutions: 'Spider control with safe removal and prevention methods.'
        },
        {
          name: 'Lizard Control',
          description: 'Safe and effective lizard removal services using humane methods.',
          category: 'lizard',
          price: 80.00,
          duration: '1 hour',
          image: '/images/houselizards.webp',
          dangers: 'Lizards can be a nuisance and leave droppings.',
          solutions: 'Humane lizard removal and prevention techniques.'
        }
      ];

      for (const service of services) {
        try {
          const exists = await Service.findOne({ where: { name: service.name } });
          if (!exists) {
            await Service.create(service);
          }
        } catch (serviceError) {
          console.log(`⚠️ Could not create service ${service.name}:`, serviceError.message);
        }
      }
      console.log('✅ Default services created/verified.');
    } catch (servicesError) {
      console.log('⚠️ Could not create default services:', servicesError.message);
    }

  } catch (error) {
    console.error('❌ Database initialization error:', error.message);
    // Don't throw the error, just log it
    console.log('💡 Server will continue without database features.');
  }
};

module.exports = { initDatabase };
