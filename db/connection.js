const  Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    store: './db/app.db'
});

module.exports = sequelize
