const express = require("express");
const router = express.Router();
const { getProducts, getProductById } = require("../controllers/productController");

// Route pour obtenir tous les produits
router.get("/", getProducts);

// Route pour obtenir un produit par ID
router.get("/:id", getProductById);

module.exports = router;
