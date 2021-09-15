const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const jsonParser = express.json();
const cors = require('cors');
const toJson = require('@meanie/mongoose-to-json');
const mongoose = require('mongoose');

mongoose.plugin(toJson);

require('./src/utils/db.js').setUpConnection()
require('./src/models/category');
require('./src/models/status');

const port = require('./src/constants/app').PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(jsonParser);

app.use('/',require('./src/routes/index'));

server.listen(port, () => console.log('port', port));
