const testDetailsDAO = require('../dao/testDetailsDAO');

exports.receivePatientData = async (
    Test_Id,
    Device_Id,
    Patient_Id,
    NOTES,
    Test_Start_Date,
    Test_Stop_Date,
    User_Id
) => {
    try {
        await testDetailsDAO.createTestDetails(
            Test_Id,
            Device_Id,
            Patient_Id,
            NOTES,
            Test_Start_Date,
            Test_Stop_Date,
            User_Id
        );
        console.log('Patient data stored successfully');
        return 'Patient ID received successfully';
    } catch (error) {
        console.error('Failed to store patient data:', error);
        throw error;
    }
};
