const { Router } = require('express');
const reservaController = require('../controllers/reservas.controller');

const loginRouter = Router();

loginRouter.get('/', reservaController);


module.exports = loginRouter;