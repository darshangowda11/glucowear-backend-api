const activityLogService = require('../services/logService');
const deviceLogService = require('../services/logService');

exports.insertActivityLog = async (req, res) => {
  const { Activity_Id, User_Id, Activity, Activity_Info } = req.body;

  try {
    const response = await activityLogService.insertActivityLog(
      Activity_Id,
      User_Id,
      Activity,
      Activity_Info
    );
    res.json(response);
  } catch (error) {
    console.error('Failed to insert activity log:', error);
    res.status(500).json('Failed to insert activity log');
  }
};

exports.insertDeviceLog = async (req, res) => {
  const { Device_Log_Id, Test_Id } = req.body;

  try {
    const response = await deviceLogService.insertDeviceLog(Device_Log_Id, Test_Id);
    res.json(response);
  } catch (error) {
    console.error('Failed to insert device log:', error);
    res.status(500).json('Failed to insert device log');
  }
};
