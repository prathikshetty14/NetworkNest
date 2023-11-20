const mongoose = require('mongoose');


// Define the schema for the data model
const userSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  avatar: String,
  domain: String,
  available: Boolean,
});


// Create and export the data model using the defined schema
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
