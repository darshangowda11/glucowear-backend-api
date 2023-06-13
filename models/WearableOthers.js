const mongoose = require('mongoose');
const TestDetails = require('../models/TestDetails');

const wearableOthersSchema = new mongoose.Schema({
  Id: { type: Buffer, required: true, unique: true },
  Test_Id: { type: Number, ref: 'TestDetails', required: true },
  Temperature: { type: Number },
  Skin_Temperature: { type: Number },
  Humidity: { type: Number },
  Pressure: { type: Number },
  created_at: { type: Date, default: Date.now },
});

wearableOthersSchema.pre('save', async function(next) {
  try {
    const test = await TestDetails.findOne({ Test_Id: this.Test_Id });
    if (!test) {
      throw new Error('Test ID does not exist');
    }
    next();
  } catch (error) {
    next(error);
  }
});

const WearableOthers = mongoose.model('WearableOthers', wearableOthersSchema);

module.exports = WearableOthers;
