const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

//mongoose.connect('mongodb://localhost/ecommerce', {
//      url: 'mongodb+srv://kcire28ul:SglD1g0dpyFlk4zG@cluster0.mfasb1r.mongodb.net/?retryWrites=true&w=majority',
//mongoose.connect('mongodb://localhost:27017/ecommerce', {
mongoose.connect('mongodb+srv://kcire28ul:SglD1g0dpyFlk4zG@cluster0.mfasb1r.mongodb.net/ecommerce?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

//modelos
require('./models/Client');
require('./models/Item');

const orderRoutes = require('./routes/orders');
app.use('/orders', orderRoutes);

const clientRoutes = require('./routes/clients');
app.use('/clients', clientRoutes);

const itemRoutes = require('./routes/items');
app.use('/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
