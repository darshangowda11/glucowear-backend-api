
const mongoose = require('mongoose');

const roleFunctionSchema = new mongoose.Schema({
  Role_Function_Id: { type: Number, required: true, unique: true },
  Role_Id: { type: Number, ref: 'Role', required: true },
  Function_Name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const RoleFunction = mongoose.model('RoleFunction', roleFunctionSchema);

module.exports = RoleFunction;


