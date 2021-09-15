const router = require('express').Router();
const controller = require('../controllers/category');

router.route('/')
  .get(controller.getAll)
  .post(controller.create)

router.route('/:id')
  .get(controller.getOne)
  .delete(controller.deleteOne)
  .put(controller.update)

module.exports = router;
