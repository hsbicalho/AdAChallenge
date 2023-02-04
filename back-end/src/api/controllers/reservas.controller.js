const reservaService = require('../services/reservas.service');

const AllReservas = async (_req, res) => {
  const reservas = await reservaService();
  return res.status(200).json(reservas);
};

module.exports = AllReservas;
