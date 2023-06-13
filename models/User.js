const mongoose = require('mongoose');
const Role = require('../models/Role');

const userSchema = new mongoose.Schema({
  User_Id: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  Role_Id: { type: Number, ref: 'Role', required: true },
  created_at: { type: Date, default: Date.now },
});

userSchema.pre('save', async function(next) {
  try {
    const role = await Role.findOne({ Role_Id: this.Role_Id });
    if (!role) {
      throw new Error('Role ID does not exist');
    }
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
