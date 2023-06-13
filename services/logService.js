const activityLogDAO = require('../dao/logDAO');
const deviceLogDAO = require('../dao/logDAO');
const fs = require('fs');
const path = require('path');

exports.insertActivityLog = async (Activity_Id, User_Id, Activity, Activity_Info) => {
    try {
        const activityLog = await activityLogDAO.createActivityLog(Activity_Id, User_Id, Activity, Activity_Info);
        console.log('Activity log inserted successfully');
        return 'Activity log inserted successfully';
    } catch (error) {
        console.error('Failed to insert activity log:', error);
        throw error;
    }
};

exports.insertDeviceLog = async (Device_Log_Id, Test_Id) => {
    try {
        const deviceLog = await deviceLogDAO.createDeviceLog(Device_Log_Id, Test_Id);

        const projectDirectory = __dirname;
        console.log("projectDirectory:"+projectDirectory);
        const generalDirectory = path.join(projectDirectory, 'files/');
        console.log(generalDirectory);
        if (!fs.existsSync(generalDirectory)) {
            fs.mkdirSync(generalDirectory);
        }

        // const fileName = 'log.txt';
        const filePath = path.join(generalDirectory, "log.txt");

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "Content need to be add here");
        }

        deviceLog.Log_Location = filePath;
        await deviceLog.save();

        console.log('Device log inserted successfully');
        return 'Device log inserted successfully';
    } catch (error) {
        console.error('Failed to insert device log:', error);
        throw error;
    }
};
