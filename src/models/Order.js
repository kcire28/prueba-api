const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: String,
  createDate: Date,
  status: String,
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  shippingAddress: String,
  shippingPromise: Date,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
},{ versionKey: false });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
