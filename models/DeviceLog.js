const mongoose = require('mongoose');
const TestDetails = require('../models/TestDetails');

const deviceLogSchema = new mongoose.Schema({
  Device_Log_Id: { type: Buffer, required: true, unique: true },
  Test_Id: { type: Number, ref: 'TestDetails', required: true },
  Log_Location: { type: String },
  created_at: { type: Date, default: Date.now },
});

deviceLogSchema.pre('save', async function (next) {
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

const DeviceLog = mongoose.model('DeviceLog', deviceLogSchema);

module.exports = DeviceLog;
