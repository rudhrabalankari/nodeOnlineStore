const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    // Disable logging for production
});

module.exports = sequelize;
