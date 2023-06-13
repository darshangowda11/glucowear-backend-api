const wearableService = require('../services/wearableService');

exports.insertWearableData = async (req, res) => {
  const { Id, Test_Id, Temperature, Skin_Temperature, Humidity, Pressure } = req.body;

  try {
    const response = await wearableService.insertWearableData(
      Id,
      Test_Id,
      Temperature,
      Skin_Temperature,
      Humidity,
      Pressure
    );
    res.json(response);
  } catch (error) {
    console.error('Failed to insert wearable data:', error);
    res.status(500).json('Failed to insert wearable data');
  }
};
