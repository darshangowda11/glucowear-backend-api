const mongoose = require('mongoose');
const TestDetails = require('../models/TestDetails');

const accelerometerSchema = new mongoose.Schema({
  Accelo_Id: { type: Buffer, required: true, unique: true },
  Test_Id: { type: Number, ref: 'TestDetails', required: true },
  Capture_Time: { type: Date, default: Date.now },
  Measurement: { type: Number },
  x: { type: Number },
  y: { type: Number },
  z: { type: Number },
  hex_x: { type: String },
  hex_y: { type: String },
  hex_z: { type: String },
  created_at: { type: Date, default: Date.now }
});

accelerometerSchema.pre('save', async function(next) {
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

const Accelerometer = mongoose.model('Accelerometer', accelerometerSchema);

module.exports = Accelerometer;
