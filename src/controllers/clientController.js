const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();

    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};