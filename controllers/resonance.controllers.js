const resonanceService = require('../services/resonanceService');
const resonanceDetailsService = require('../services/resonanceService');
const batchSummaryService = require('../services/resonanceService');

exports.insertResonance = async (req, res) => {
  const { Resonance_Id, Test_Id, Resonance_Number, Start_Frequency, End_Frequency } = req.body;

  try {
    const response = await resonanceService.insertResonance(
      Resonance_Id,
      Test_Id,
      Resonance_Number,
      Start_Frequency,
      End_Frequency
    );
    res.json(response);
  } catch (error) {
    console.error('Failed to insert resonance data:', error);
    res.status(500).json('Failed to insert resonance data');
  }
};

exports.insertResonanceDetails = async (req, res) => {
  const { Sweep_Id, Resonance_Id, Frequency, ADC } = req.body;

  try {
    const response = await resonanceDetailsService.insertResonanceDetails(
      Sweep_Id,
      Resonance_Id,
      Frequency,
      ADC
    );
    res.json(response);
  } catch (error) {
    console.error('Failed to insert resonance details:', error);
    res.status(500).json('Failed to insert resonance details');
  }
};

exports.insertBatchSummary = async (req, res) => {
  const batchSummaryData = req.body;

  try {
    const response = await batchSummaryService.insertBatchSummary(batchSummaryData);
    res.json(response);
  } catch (error) {
    console.error('Failed to insert batch summary:', error);
    res.status(500).json('Failed to insert batch summary');
  }
};
