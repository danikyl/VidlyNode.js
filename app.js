/*jshint esversion: 6 */
const express = require('express');
const app = express();
const rout_Movies = require('./routes/movies');
const generalDebug = require('./debug');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const mongoose = require('mongoose');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/', rout_Movies);
app.use(helmet());

mongoose.connect(config.db_connection, {useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>generalDebug('Connected to DB!'))
    .catch((err) => generalDebug('Could not connect to DB...', err));


port = 3000;
maxPendingConnections = 511;
host = '127.0.0.1';

app.listen(port, host, maxPendingConnections, ()=> {
    generalDebug(`Listening to port ${port}`);
});