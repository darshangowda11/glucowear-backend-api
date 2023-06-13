const mongoose = require('mongoose');
const User = require('../models/User');

const activityLogSchema = new mongoose.Schema({
  Activity_Id: { type: Buffer, required: true, unique: true },
  User_Id: { type: Number, ref: 'User', required: true },
  Activity: { type: String, required: true },
  Activity_Info: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

activityLogSchema.pre('save', async function(next) {
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

const ActivityLog = mongoose.model('ActivityLog', activityLogSchema);

module.exports = ActivityLog;
