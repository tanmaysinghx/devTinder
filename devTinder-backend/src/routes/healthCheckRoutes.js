const router = require('express').Router();
const { healthCheckController } = require('../controllers/healthCheckController');

router.get("/health-check", healthCheckController);

module.exports = router;
