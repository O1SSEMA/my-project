const mongoose = require('mongoose');


const OrderItemSchema = new mongoose.Schema({
product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
quantity: Number,
price: Number
});


const OrderSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
items: [OrderItemSchema],
total: Number,
address: String,
status: { type: String, default: 'pending' }
}, { timestamps: true });


module.exports = mongoose.model('Order', OrderSchema);