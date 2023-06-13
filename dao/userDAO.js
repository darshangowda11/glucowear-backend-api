const User = require('../models/User');

exports.findUserByUserId = async (User_Id) => {
    const existingUser = await User.findOne({ User_Id });
    return existingUser;
};

exports.createUser = async (User_Id, username, password, email, Role_Id) => {
    const newUser = await User.create({ User_Id, username, password, email, Role_Id });
    return newUser;
};

exports.findUserByUsername = async (username) => {
    const userData = await User.findOne({ username });
    return userData;
};

exports.updateUserPassword = async (username, hashedPassword) => {
    await User.updateOne({ username }, { password: hashedPassword });
};

exports.findAllUsers = async () => {
    const allUsers = await User.find();
    return allUsers;
};
