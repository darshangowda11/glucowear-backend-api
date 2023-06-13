const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  Role_Id: { type: Number, required: true, unique: true },
  Role_Name: { type: String, required: true },
  Role_Description: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;


