const mongoose = require('mongoose');
const Resonance = require('../models/Resonance');

const batchSummarySchema = new mongoose.Schema({
  Batch_Id: { type: Buffer, required: true, unique: true },
  Resonance_Id: { type: Number, ref: 'Resonance', required: true },
  Sample_No: { type: Number },
  Date_time: {  type: Date, default: Date.now },
  TimePeriod_Secs: { type: Number },
  FIR: { type: Number },
  GM: { type: Number },
  GM_Without_FV: { type: Number },
  Quad: { type: Number },
  BoardGM: { type: Number },
  GMADC: { type: Number },
  ADCinVolt: { type: String },
  HumiditySkin: { type: String },
  Humidity_FreeSpace: { type: String },
  Start_Temp: { type: String },
  End_Temp: { type: String },
  Sweep_Time_Secs: { type: Number },
  Step_Size: { type: Number },
  Samples: { type: Number },
  Cycles: { type: Number },
  Fine_Steps: { type: Number },
  Holding_Temp: { type: Number },
  Oversampling: { type: Number },
  Right_Shift: { type: Number },
  Idle_Time_Secs: { type: Number },
  PowerOn_Idle: { type: Boolean },
});

batchSummarySchema.pre('save', async function(next) {
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

const BatchSummary = mongoose.model('BatchSummary', batchSummarySchema);

module.exports = BatchSummary;
