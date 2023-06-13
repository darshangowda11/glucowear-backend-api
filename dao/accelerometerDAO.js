const Accelerometer = require('../models/Accelerometer');

exports.createAccelerometerData = async (Accelo_Id, Test_Id, Capture_Time, Measurement, x, y, z, hex_x, hex_y, hex_z) => {
    // Create a new instance of the Accelerometer model
    const accelerometer = new Accelerometer({
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
    });

    // Save the accelerometer instance to the database
    return await accelerometer.save();
};
