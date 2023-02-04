const { Reserva } = require('../../database/models');

const AllReservas = async () => {
    const result = await Reserva.findAll();
    return result;
  };

  module.exports = AllReservas;
