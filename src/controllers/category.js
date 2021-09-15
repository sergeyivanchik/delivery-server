const mongoose = require('mongoose');
Category = mongoose.model('Category');


const create = async (req, res) => {
  const category = await new Category(req.body);
  category.save()
    .then(category => res.send('OK'))
    .catch(error => res.send(error));
};

const getAll = async (req, res) => {
  await Category.find()
    .then(categories => res.send(categories))
    .catch(error => res.send(error));
};

module.exports = {
  create,
  getAll
}
