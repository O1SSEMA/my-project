const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
name: { type: String, required: true },
price: { type: Number, required: true },
description: String,
category: String,      // Ajouté
brand: String,         // Ajouté
image: String          // Ajouté
}, { timestamps: true });


module.exports = mongoose.model('Product', ProductSchema);