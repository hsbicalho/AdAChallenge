module.exports = (sequelize, DataTypes) => {
  const Reserva = sequelize.define("Reserva", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATE,
    },
    checkin: {
      type: DataTypes.DATE,
    },
    checkout: {
      type: DataTypes.DATE,
    },
    AluguelComImposto: {
      type: DataTypes.STRING,
    },
    AluguelSemImposto: {
      type: DataTypes.STRING,
    },
    ImpostoDoAluguel: {
      type: DataTypes.STRING,
    },
    ExtraComImposto: {
      type: DataTypes.STRING,
    },
    ExtraSemImposto: {
      type: DataTypes.STRING,
    },
    ImpostoDoExtra: {
      type: DataTypes.STRING,
    },
    TotalDaReservaComImposto: {
      type: DataTypes.STRING,
    },
    TotalDaReservaSemImposto: {
      type: DataTypes.STRING,
    },
    TotalImposto: {
      type: DataTypes.STRING,
    },
    Pagamento: {
      type: DataTypes.STRING,
    },
    Pendente: {
      type: DataTypes.STRING,
    },
    NomeAlojamento: {
      type: DataTypes.STRING,
    },
    Localidade: {
      type: DataTypes.STRING,
    },
    Portal: {
      type: DataTypes.STRING,
    },
    ComissãoCalculada: {
      type: DataTypes.STRING,
    },
    ComissãoPersonalizada: {
      type: DataTypes.STRING,
    },

  }, {
    underscored: true,
    timestamps: false
  });
  return Reserva;
};
