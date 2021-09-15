const mongoose = require('mongoose');
Banner = mongoose.model('Banner');


const create = async (req, res) => {
  const banner = await new Banner(req.body);
  banner.save()
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

const getAll = async (req, res) => {
  await Banner.find()
    .then(banners => res.send(banners))
    .catch(error => res.send(error));
};

const getOne = async (req, res) => {
  await Banner.findById(req.params.id)
    .then(banner => res.send(banner))
    .catch(error => res.send(error));
};

const deleteOne = async (req, res) => {
  await Banner.findByIdAndRemove(req.params.id)
    .then(() => res.send('OK'))
    .catch(error => res.send(error));
};

const update = async (req, res) => {
  await Banner.findByIdAndUpdate(req.params.id, req.body)
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
