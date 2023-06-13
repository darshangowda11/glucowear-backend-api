const express = require('express');
const router = express.Router()
const userLoginController = require('../controllers/user.controllers');
const verifyToken = require('../utils/jwtToken');

// Only for testing Purpose
router.get('/all',verifyToken, userLoginController.testUserController) 


router.post("/login", userLoginController.loginController)
router.post("/reset",verifyToken, userLoginController.resetController)


module.exports = router;