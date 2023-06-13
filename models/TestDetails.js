const mongoose = require('mongoose');
const User = require('../models/User');

const testDetailsSchema = new mongoose.Schema({
  Test_Id: { type: Number, required: true, unique: true },
  Device_Id: { type: String, required: true },
  Patient_Id: { type: String, required: true },
  NOTES: { type: String, required: true },
  Test_Start_Date: { type: Date },
  Test_Stop_Date: { type: Date },
  User_Id: { type: Number, ref: 'User', required: true },
  created_at: { type: Date, default: Date.now },
});

testDetailsSchema.pre('save', async function(next) {
  try {
    const user = await User.findOne({ User_Id: this.User_Id });
    if (!user) {
      throw new Error('User ID does not exist');
    }
    next();
  } catch (error) {
    next(error);
  }
});

const TestDetails = mongoose.model('TestDetails', testDetailsSchema);

module.exports = TestDetails;
