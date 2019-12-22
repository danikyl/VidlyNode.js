/*jshint esversion: 6 */
const express = require('express');
const app = express();
const rout_Genres = require('./routes/genres');
const generalDebug = require('./debug');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/genres', rout_Genres);
app.use(helmet());



port = process.env.PORT || 3000;

app.listen(port, ()=> {
    generalDebug(`Listening to port ${port}`);
});