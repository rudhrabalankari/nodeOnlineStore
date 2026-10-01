const db = require("../util/database");
//const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageURL, description, price) {
    this.id = id;
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }

  save() {
   return db.execute(
      "INSERT INTO product (title, price, description, imageURL) VALUES (?,?,?,?)",
      [this.title, this.price, this.description, this.imageURL]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute(
      "SELECT id, title, imageURL AS imageUrl, description, price FROM product"
    );
  }

  static findById(id) {}
};
