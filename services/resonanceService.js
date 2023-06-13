const resonanceDAO = require('../dao/resonanceDAO');
const resonanceDetailsDAO = require('../dao/resonanceDAO');
const batchSummaryDAO = require('../dao/resonanceDAO');

exports.insertResonance = async (Resonance_Id, Test_Id, Resonance_Number, Start_Frequency, End_Frequency) => {
    try {
        const resonance = await resonanceDAO.createResonance(
            Resonance_Id,
            Test_Id,
            Resonance_Number,
            Start_Frequency,
            End_Frequency
        );
        console.log('Resonance data inserted successfully');
        return 'Resonance data inserted successfully';
    } catch (error) {
        console.error('Failed to insert resonance data:', error);
        throw error;
    }
};

exports.insertResonanceDetails = async (Sweep_Id, Resonance_Id, Frequency, ADC) => {
    try {
        const resonanceDetails = await resonanceDetailsDAO.createResonanceDetails(
            Sweep_Id,
            Resonance_Id,
            Frequency,
            ADC
        );
        console.log('Resonance details inserted successfully');
        return 'Resonance details inserted successfully';
    } catch (error) {
        console.error('Failed to insert resonance details:', error);
        throw error;
    }
};

exports.insertBatchSummary = async (batchSummaryData) => {
    try {
        const batchSummary = await batchSummaryDAO.createBatchSummary(batchSummaryData);
        console.log('Batch summary inserted successfully');
        return 'Batch summary inserted successfully';
    } catch (error) {
        console.error('Failed to insert batch summary:', error);
        throw error;
    }
};
