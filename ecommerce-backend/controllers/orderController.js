const Order = require("../models/Order");

// Créer une commande
const createOrder = async (req, res) => {
  try {
    const { userId, products, total } = req.body;

    const order = await Order.create({ userId, products, total });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtenir les commandes d’un utilisateur
const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createOrder, getOrdersByUser };  // ✅ Très important
