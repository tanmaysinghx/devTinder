const router = require('express').Router();

const { createUser } = require('../controllers/userController');

router.post('/users/register-user', createUser);

module.exports = router;