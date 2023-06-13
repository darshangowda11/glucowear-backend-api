const mongoose = require('mongoose');
const TestDetails = require('../models/TestDetails');

const resonanceSchema = new mongoose.Schema({
  Resonance_Id: { type: Number, required: true, unique: true },
  Test_Id: { type: Number, ref: 'TestDetails', required: true },
  Resonance_Number: { type: Buffer },
  Start_Frequency: { type: Number },
  End_Frequency: { type: Number },
  created_at: { type: Date, default: Date.now },
});

resonanceSchema.pre('save', async function(next) {
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

const Resonance = mongoose.model('Resonance', resonanceSchema);

module.exports = Resonance;
