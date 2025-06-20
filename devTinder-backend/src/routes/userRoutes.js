/* User Routes */

const router = require('express').Router();

const { createUser } = require('../controllers/userController');

router.post('/users', createUser);

module.exports = router;