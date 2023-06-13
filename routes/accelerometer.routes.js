const express = require('express');
const router = express.Router();
const accelerometerController = require('../controllers/accelrometer.controllers');
const verifyToken= require("../utils/jwtToken")

// API to insert data into tbl_Accelerometer
router.post('/accelerometer',verifyToken, accelerometerController.insertAccelerometerData);

module.exports = router;
