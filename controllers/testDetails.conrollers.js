const testDetailsService = require('../services/testDetailsService');

exports.receivePatientData = async (req, res) => {
  const {
    Test_Id,
    Device_Id,
    Patient_Id,
    NOTES,
    Test_Start_Date,
    Test_Stop_Date,
    User_Id,
  } = req.body;

  try {
    const response = await testDetailsService.receivePatientData(
      Test_Id,
      Device_Id,
      Patient_Id,
      NOTES,
      Test_Start_Date,
      Test_Stop_Date,
      User_Id
    );
    res.json(response);
  } catch (error) {
    console.error('Failed to store patient data:', error);
    res.status(500).json('Failed to store patient data');
  }
};

exports.stopDataCollection = (req, res) => {
  res.json('Loop stopped and data stored');
};
