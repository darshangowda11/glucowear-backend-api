const express = require('express');
const router = express.Router();
const verifyToken = require("../utils/jwtToken");
const wearableOthersController = require('../controllers/wearableothers.contollers');

// API to insert data into tbl_Wearable_Others
router.post('/wearableothers', verifyToken, wearableOthersController.insertWearableData);

module.exports = router;


