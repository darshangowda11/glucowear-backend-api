const express = require('express');
const router = express.Router();
const patientController = require('../controllers/testDetails.conrollers');
const verifyToken = require("../utils/jwtToken");

// API to receive patient ID and notes
router.post('/start',verifyToken, patientController.receivePatientData);

// API to stop the data collection loop and store the data
router.get('/stop', verifyToken, patientController.stopDataCollection);

module.exports = router;
