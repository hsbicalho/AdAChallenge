'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          data: {
            type: Sequelize.STRING,
            allowNull: false
          },
          checkin: {
            type: Sequelize.STRING,
            allowNull: false
          },
          checkout: {
            type: Sequelize.STRING,
            allowNull: false
          },
          aluguel_com_imposto: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          aluguel_sem_imposto: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          imposto_do_aluguel: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          extra_com_imposto: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          extra_sem_imposto: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          imposto_do_extra: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          total_da_reserva_com_imposto: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          total_da_reserva_sem_imposto: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          total_imposto: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          pagamento: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          pendente: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          nome_alojamento: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          localidade: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          portal: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          comissão_calculada: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          comissão_personalizada: {
            type: Sequelize.STRING,
            allowNull: true,
          },    
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('reservas');

  }
};