const router = require('express').Router();

router.use('/workout', require('./workout'));

module.exports = router;