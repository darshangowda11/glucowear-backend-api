const express = require('express');
const router = express.Router();
const logController = require('../controllers/log.controllers');
const verifyToken= require("../utils/jwtToken")

// API to insert data into tbl_Activity_log
router.post('/activitylog',verifyToken, logController.insertActivityLog);

// API to insert data into tbl_Device_Log
router.post('/devicelog', logController.insertDeviceLog);

module.exports = router;
    