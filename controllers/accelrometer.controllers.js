const accelerometerService = require('../services/accelerometerService');

exports.insertAccelerometerData = async (req, res) => {
  const { Accelo_Id, Test_Id, Capture_Time, Measurement, x, y, z, hex_x, hex_y, hex_z } = req.body;

  try {
    const response = await accelerometerService.insertAccelerometerData(
      Accelo_Id,
      Test_Id,
      Capture_Time,
      Measurement,
      x,
      y,
      z,
      hex_x,
      hex_y,
      hex_z
    );
    res.json(response);
  } catch (error) {
    console.error('Failed to insert accelerometer data:', error);
    res.status(500).json('Failed to insert accelerometer data');
  }
};
