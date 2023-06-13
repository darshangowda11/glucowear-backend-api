const mongoose = require('mongoose');
const Resonance = require('../models/Resonance');

const resonanceDetailsSchema = new mongoose.Schema({
  Sweep_Id: { type: Number, required: true, unique: true },
  Resonance_Id: { type: Number, ref: 'Resonance', required: true },
  Frequency: { type: Number },
  ADC: { type: Number },
  created_at: { type: Date, default: Date.now },
});

resonanceDetailsSchema.pre('save', async function(next) {
  try {
    const resonance = await Resonance.findOne({ Resonance_Id: this.Resonance_Id });
    if (!resonance) {
      throw new Error('Resonance ID does not exist');
    }
    next();
  } catch (error) {
    next(error);
  }
});

const ResonanceDetails = mongoose.model('ResonanceDetails', resonanceDetailsSchema);

module.exports = ResonanceDetails;
