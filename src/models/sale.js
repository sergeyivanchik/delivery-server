const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, default: '' },
},
{
  versionKey: false
})

module.exports = mongoose.model('Sale', schema);
