const accelerometerDAO = require('../dao/accelerometerDAO');

exports.insertAccelerometerData = async (Accelo_Id, Test_Id, Capture_Time, Measurement, x, y, z, hex_x, hex_y, hex_z) => {
    try {
        await accelerometerDAO.createAccelerometerData(
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
        console.log('Accelerometer data inserted successfully');
        return 'Accelerometer data inserted successfully';
    } catch (error) {
        console.error('Failed to insert accelerometer data:', error);
        throw error;
    }
};
