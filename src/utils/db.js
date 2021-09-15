const mongoose = require('mongoose')
const connectionString = require('../constants/db').CONNECTION_URL;

const setUpConnection = () => {
  mongoose.connect(connectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
    .then(() => mongoose.connection)
    .catch(error => console.log(error))
}

module.exports = {
  setUpConnection
}
