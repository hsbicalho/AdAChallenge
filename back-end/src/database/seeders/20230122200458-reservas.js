const csv = require('csvtojson');
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = await csv().fromFile('reservas.csv');

    await queryInterface.bulkInsert('reservas', data, { timestamps: false });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservas', null, {});

  }
};