const userService = require('../services/userService');

// Login
exports.loginController = async (req, res) => {
  try {
    const { User_Id, username, email, password, Role_Id } = req.body;
    const response = await userService.authenticateUser(User_Id, username, email, password, Role_Id, res);
    res.json(response);
  } catch (err) {
    console.error(`Error during authentication: ${err}`);
    res.status(500).json({
      message: 'Error occurred',
      error: err,
    });
  }
};


// Reset
exports.resetController = async (req, res) => {
  const { username, new_password } = req.body;
  try {
    const response = await userService.resetPassword(username, new_password);
    res.status(response.status).json(response);
  } catch (err) {
    console.error(`Error resetting password: ${err}`);
    res.status(500).json({
      message: 'Error occurred',
      error: err,
    });
  }
};


// All-Data for Testing purpose
exports.testUserController = async (req, res) => {
  try {
    const allUserData = await userService.getAllUsers();
    res.status(200).json({
      message: 'All user data',
      user_data: allUserData,
    });
  } catch (error) {
    console.error(`Error getting user data: ${error}`);
    res.status(500).json({
      message: 'Error getting user data',
    });
  }
};
