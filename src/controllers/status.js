const mongoose = require('mongoose');
Status = mongoose.model('Status');


const create = async (req, res) => {
  const status = await new Status(req.body);
  status.save()
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

const getOne = async (req, res) => {
  await Status.findById(req.params.id)
    .then(status => res.send(status))
    .catch(error => res.send(error));
};

const getAll = async (req, res) => {
  await Status.find()
    .then(statuses => res.send(statuses))
    .catch(error => res.send(error));
};

const deleteOne = async (req, res) => {
  await Status.findByIdAndRemove(req.params.id)
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

const update = async (req, res) => {
  await Status.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

module.exports = {
  create,
  getAll,
  deleteOne,
  update,
  getOne
}
