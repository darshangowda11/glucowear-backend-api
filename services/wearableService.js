const wearableDAO = require('../dao/wearableDAO');

exports.insertWearableData = async (Id, Test_Id, Temperature, Skin_Temperature, Humidity, Pressure) => {
    try {
        await wearableDAO.createWearableData(
            Id,
            Test_Id,
            Temperature,
            Skin_Temperature,
            Humidity,
            Pressure
        );
        console.log('Wearable data inserted successfully');
        return 'Wearable data inserted successfully';
    } catch (error) {
        console.error('Failed to insert wearable data:', error);
        throw error;
    }
};
