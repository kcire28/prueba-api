const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Ruta para obtener todas las órdenes
router.get('/', orderController.getAllOrders);

//Obtener ordenes que expiran pronto
router.get('/expiresSoon', orderController.getOrdersExpiringSoon);


router.get('/traveling', orderController.getOrdersTravelingInRange);

// Ruta para obtener una orden por su ID
router.get('/:id', orderController.getOrderById);


router.post('/', orderController.postOrder);

module.exports = router;
