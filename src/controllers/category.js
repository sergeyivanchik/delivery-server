const mongoose = require('mongoose');
Category = mongoose.model('Category');


const create = async (req, res) => {
  const category = await new Category(req.body);
  category.save()
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

const getAll = async (req, res) => {
  await Category.find()
    .then(categories => res.send(categories))
    .catch(error => res.send(error));
};

const getOne = async (req, res) => {
  await Category.findById(req.params.id)
    .then(category => res.send(category))
    .catch(error => res.send(error));
};

const deleteOne = async (req, res) => {
  await Category.findByIdAndRemove(req.params.id)
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

const update = async (req, res) => {
  await Category.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

module.exports = {
  create,
  getAll,
  getOne,
  deleteOne,
  update
}
