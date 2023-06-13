const Resonance = require('../models/Resonance');
const ResonanceDetails = require('../models/ResonanceDetails');
const BatchSummary = require('../models/BatchSummary');

exports.createResonance = async (Resonance_Id, Test_Id, Resonance_Number, Start_Frequency, End_Frequency) => {
    // Create a new instance of the Resonance model
    const resonance = new Resonance({
        Resonance_Id,
        Test_Id,
        Resonance_Number,
        Start_Frequency,
        End_Frequency
    });

    // Save the resonance instance to the database
    return await resonance.save();
};

exports.createResonanceDetails = async (Sweep_Id, Resonance_Id, Frequency, ADC) => {
    // Create a new instance of the ResonanceDetails model
    const resonanceDetails = new ResonanceDetails({
        Sweep_Id,
        Resonance_Id,
        Frequency,
        ADC
    });

    // Save the resonanceDetails instance to the database
    return await resonanceDetails.save();
};

exports.createBatchSummary = async (batchSummaryData) => {
    // Create a new instance of the BatchSummary model
    const batchSummary = new BatchSummary(batchSummaryData);

    // Save the batchSummary instance to the database
    return await batchSummary.save();
};
