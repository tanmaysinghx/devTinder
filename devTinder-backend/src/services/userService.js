const User = require('../models/userSchema');

const createUserService = async (userData) => {
    const user = new User(userData);
    return user.save();
}

module.exports = {
    createUserService
};
