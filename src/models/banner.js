const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, required: true },
  link: { type: String, default: '' },
},
{
  versionKey: false
})

module.exports = mongoose.model('Banner', schema);