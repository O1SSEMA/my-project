const express = require("express");
const router = express.Router();
const { getUserProfile, updateUserProfile } = require("../controllers/userController");
const userController = require("../controllers/userController");

// Obtenir le profil d’un utilisateur
router.get("/:id", userController.getUserProfile);


// Mettre à jour le profil d’un utilisateur
router.put("/:id", userController.updateUserProfile);

module.exports = router;
