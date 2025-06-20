/* User Controller */

const { createUserService } = require('../services/userService');

const createUser = async (req, res) => {
    try {
        const user = await createUserService(req.body);
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createUser
};
