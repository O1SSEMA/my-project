const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = async (req, res, next) => {
const header = req.header('Authorization');
if (!header) return res.status(401).json({ message: 'No token' });
const token = header.replace('Bearer ', '');
try {
const payload = jwt.verify(token, process.env.JWT_SECRET);
req.user = await User.findById(payload.id);
next();
} catch (err) {
return res.status(401).json({ message: 'Invalid token' });
}
};