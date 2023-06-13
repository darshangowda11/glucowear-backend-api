const WearableOthers = require('../models/WearableOthers');

exports.createWearableData = async (Id, Test_Id, Temperature, Skin_Temperature, Humidity, Pressure) => {
    // Create a new instance of the WearableOthers model
    const wearableOthers = new WearableOthers({
        Id,
        Test_Id,
        Temperature,
        Skin_Temperature,
        Humidity,
        Pressure
    });

    // Save the wearableOthers instance to the database
    return await wearableOthers.save();
};
