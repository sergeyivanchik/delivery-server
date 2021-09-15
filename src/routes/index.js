const router = require('express').Router();

router.use('/category', require('./category'));
router.use('/status', require('./status'));

module.exports = router;
