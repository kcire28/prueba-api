const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  id: String,
  name: String
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

