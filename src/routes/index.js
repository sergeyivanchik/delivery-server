const router = require('express').Router();

router.use('/category', require('./category'));
router.use('/status', require('./status'));
router.use('/banner', require('./banner'));
router.use('/contact', require('./contact'));
router.use('/sale', require('./sale'));

module.exports = router;
