const express = require('express');
const router = express.Router();
const resonanceController = require('../controllers/resonance.controllers');
const verifyToken= require("../utils/jwtToken")

// API to insert data into tbl_Resonance
router.post('/resonance',verifyToken, resonanceController.insertResonance);

// API to insert data into tbl_Resonance_Details
router.post('/resonancedetails',verifyToken, resonanceController.insertResonanceDetails);

// API to insert data into tbl_Batch_Summary
router.post('/batchsummary',verifyToken, resonanceController.insertBatchSummary);

module.exports = router;
