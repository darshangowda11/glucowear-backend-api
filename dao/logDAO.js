const ActivityLog = require('../models/ActivityLog');
const DeviceLog = require('../models/DeviceLog');

exports.createActivityLog = async (Activity_Id, User_Id, Activity, Activity_Info) => {
    const activityLog = new ActivityLog({
        Activity_Id,
        User_Id,
        Activity,
        Activity_Info,
    });

    try {
        await activityLog.save();
        return activityLog;
    } catch (error) {
        throw error;
    }
};

exports.createDeviceLog = async (Device_Log_Id, Test_Id) => {
    const deviceLog = new DeviceLog({
        Device_Log_Id,
        Test_Id,
        Log_Location: null,
    });

    try {
        await deviceLog.save();
        return deviceLog;
    } catch (error) {
        throw error;
    }
};
