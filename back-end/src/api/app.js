const express = require('express');
const cors = require('cors');

const reservaRouter = require('./routers/reservas.routes');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(cors());

app.use('/reservas', reservaRouter);

module.exports = app;
