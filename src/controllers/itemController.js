const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
  try {
    const Items = await Item.find();

    res.status(200).json(Items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};