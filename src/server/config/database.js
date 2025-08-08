const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

// Check if MySQL environment variables are properly set
const hasMySQLConfig = process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD;

if (hasMySQLConfig) {
  try {
    sequelize = new Sequelize(
      process.env.DB_NAME || 'pestmark_db',
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        define: {
          timestamps: true,
          underscored: true
        }
      }
    );
  } catch (error) {
    console.log('⚠️ MySQL configuration failed, falling back to SQLite...');
    sequelize = createSQLiteConnection();
  }
} else {
  console.log('ℹ️ No MySQL configuration found, using SQLite for development...');
  sequelize = createSQLiteConnection();
}

function createSQLiteConnection() {
  return new Sequelize({
    dialect: 'sqlite',
    storage: './pestmark.sqlite',
    logging: false,
    define: {
      timestamps: true,
      underscored: true
    }
  });
}

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
    return true;
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
    console.log('💡 Please ensure MySQL is running or check your database credentials.');
    return false;
  }
};

module.exports = { sequelize, testConnection };
