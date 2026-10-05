const db = require("../util/database");
const Sequelize = require("sequelize");

const Product = db.define("product",
    {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
},{
  freezeTableName: true,
    });

module.exports = Product;