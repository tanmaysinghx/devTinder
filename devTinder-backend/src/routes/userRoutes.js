const router = require('express').Router();

const { createUser, loginUser } = require('../controllers/userController');

router.post('/users/register-user', createUser);
router.post('/users/login-user', loginUser);

module.exports = router;