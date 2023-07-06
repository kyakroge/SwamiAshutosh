const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/DBKailashCRUD"

mongoose.connect(mongoURI);
console.log('connecction successful...');

module.exports = mongoose;