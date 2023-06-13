
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../dao/userDAO');

// Authentication
exports.authenticateUser = async (User_Id, username, email, password, Role_Id, res) => {
    const existingUser = await userService.findUserByUserId(User_Id);
    if (existingUser) {
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (passwordMatch) {
            const token = jwt.sign({ _id: existingUser._id }, "glucoWear", { expiresIn: '1h' });
            // Set the token in a cookie
            res.cookie('token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true });
            return {
                user: existingUser,
                token: token,
                message: 'Logged In Successfully',
            };
        } else {
            return {
                error: 'Incorrect Password',
                status: 405,
            };
        }
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userService.createUser(User_Id, username, hashedPassword, email, Role_Id);
        const token = jwt.sign({ _id: newUser._id }, 'glucoWear', { expiresIn: '1h' });
        // Set the token in a cookie
        res.cookie('token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true });
        return {
            user: newUser,
            token,
            message: 'Registered and Logged In Successfully',
        };
    }
};

// Reseting the password
exports.resetPassword = async (username, new_password) => {
    const userData = await userService.findUserByUsername(username);
    if (userData) {
        const hashedPassword = bcrypt.hashSync(new_password, 10);
        await userService.updateUserPassword(username, hashedPassword);
        return {
            message: 'Password reset successful',
            data: `Password reset for ${username}`,
            status: 200,
        };
    } else {
        return {
            message: 'User does not exist for reset',
            status: 400,
        };
    }
};

// Get all Users
exports.getAllUsers = async () => {
    const allUserData = await userService.findAllUsers();
    return allUserData;
};

