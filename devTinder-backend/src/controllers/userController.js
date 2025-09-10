const { createUserService, loginUserService } = require('../services/userService');

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let user = {};
        if (username && email && password) {
            user = await createUserService(username, email, password);
        } else {
            return res.status(400).json({ errorMessage: "Request body is not correct" });
        }
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: "API call failed", error: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        let user = {};
        if ((username || email) && password) {
            user = await loginUserService(username, email, password);
            if (!user) {
                return res.status(401).json({ errorMessage: "Invalid credentials" });
            }
            return res.status(200).json({ message: "User logged in successfully", user });
        } else {
            return res.status(400).json({ errorMessage: "Request body is not correct" });
        }
    } catch (error) {
        res.status(500).json({ message: "API call failed", error: error.message })
    }
}


module.exports = {
    createUser,
    loginUser
};
