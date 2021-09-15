const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  title:{ type: String, required: true },
  image: { type: String, required: true }
},
{
  versionKey: false
})

module.exports = mongoose.model('Category', schema);
