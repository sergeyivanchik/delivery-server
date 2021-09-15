const mongoose = require('mongoose');
Sale = mongoose.model('Sale');


const create = async (req, res) => {
  const sale = await new Sale(req.body);
  sale.save()
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

const getAll = async (req, res) => {
  await Sale.find()
    .then(sales => res.send(sales))
    .catch(error => res.send(error));
};

const getOne = async (req, res) => {
  await Sale.findById(req.params.id)
    .then(sale => res.send(sale))
    .catch(error => res.send(error));
};

const deleteOne = async (req, res) => {
  await Sale.findByIdAndRemove(req.params.id)
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

const update = async (req, res) => {
  await Sale.findByIdAndUpdate(req.params.id, req.body)
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
