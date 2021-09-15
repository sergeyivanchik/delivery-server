const router = require('express').Router();
const controller = require('../controllers/category');

router.route("/")
  .get(controller.getAll)
  .post(controller.create)//create
  // .put change

module.exports = router;