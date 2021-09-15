const router = require('express').Router();

router.use('/category', require('./category'));
router.use('/status', require('./status'));
router.use('/banner', require('./banner'));

module.exports = router;
