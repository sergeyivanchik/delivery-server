const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true }
},
{
  versionKey: false
})

module.exports = mongoose.model('Contact', schema);
