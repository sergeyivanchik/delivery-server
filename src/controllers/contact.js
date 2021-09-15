const mongoose = require('mongoose');
Contact = mongoose.model('Contact');


const create = async (req, res) => {
  const contact = await new Contact(req.body);
  contact.save()
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

const getAll = async (req, res) => {
  await Contact.find()
    .then(contacts => res.send(contacts))
    .catch(error => res.send(error));
};

const getOne = async (req, res) => {
  await Contact.findById(req.params.id)
    .then(contact => res.send(contact))
    .catch(error => res.send(error));
};

const deleteOne = async (req, res) => {
  await Contact.findByIdAndRemove(req.params.id)
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
