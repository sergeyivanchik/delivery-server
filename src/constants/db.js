require('dotenv').config();

const CONNECTION_URL = process.env.MONGO_URL;

module.exports = {
  CONNECTION_URL
};
