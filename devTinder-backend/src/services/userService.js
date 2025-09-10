const User = require('../models/userSchema');
const bcrypt = require('../../node_modules/bcrypt');

const createUserService = async (username, email, password) => {
    const existing = await User.findOne({ $or: [{ email }, { username }] }).lean();
    if (existing) {
        if (existing.email === email) {
            const error = new Error("Email already used, please choose a different email");
            error.status = 409;
            throw error;
        }
        if (existing.username === username) {
            const error = new Error("Username already used, please choose a different username");
            error.status = 409;
            throw error;
        }
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({ username, email, password: hashedPassword });
    const result = await user.save();
    return result;
};

const loginUserService = async (username, email, password) => {
    const userExists = await User.findOne({ $or: [{ email }, { username }] }).lean();
    if (!userExists) {
        throw new Error("User does not exist");
    }
    const passwordMarched = await bcrypt.compare(password, userExists.password);
    if (!passwordMarched) {
        throw new Error("Invalid credentials");
    }
    return userExists;
}

module.exports = {
    createUserService,
    loginUserService
};
