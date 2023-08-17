const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  url: String,
  price: Number,
  quantity: Number,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
