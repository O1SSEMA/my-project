const express = require("express");
const router = express.Router();
const { createOrder, getOrdersByUser } = require("../controllers/orderController");
const orderController = require("../controllers/orderController");

// Créer une commande
router.post("/", orderController.createOrder);


// Obtenir les commandes d’un utilisateur
router.get("/:userId", orderController.getOrdersByUser);

module.exports = router;
