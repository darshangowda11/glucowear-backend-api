const TestDetails = require('../models/TestDetails');

exports.createTestDetails = async (
    Test_Id,
    Device_Id,
    Patient_Id,
    NOTES,
    Test_Start_Date,
    Test_Stop_Date,
    User_Id
) => {
    // Create a new instance of the TestDetails model
    const testDetails = new TestDetails({
        Test_Id,
        Device_Id,
        Patient_Id,
        NOTES,
        Test_Start_Date,
        Test_Stop_Date,
        User_Id,
    });

    // Save the testDetails instance to the database
    return await testDetails.save();
};
