const Order = require('../models/order');

exports.postOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = new Order(orderData);

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('client')
      .populate('items');

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('client').populate('items');
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la orden' });
  }
};

exports.getOrdersExpiringSoon = async (req, res) => {
  try {
    const currentDate = new Date();
    const twoDaysLater = new Date();
    twoDaysLater.setDate(currentDate.getDate() + 2);

    const orders = await Order.find({
      status: 'Approve',
      shippingPromise: { $lt: twoDaysLater }
    }).populate('client').populate('items');

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getOrdersTravelingInRange = async (req, res) => {
  try {
    const { start, end } = req.query;

    const startDate = new Date(start);
    const endDate = new Date(end);
    endDate.setHours(23, 59, 59, 999);

    //console.log("startt", startDate)
    //console.log("endDate", endDate)

    const orders = await Order.find({
      status: 'Traveling',
      shippingPromise: { $gte: startDate, $lte: endDate }
    }).populate('client').populate('items');

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

