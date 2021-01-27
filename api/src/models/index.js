const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("development", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Cupon = sequelize.define("cupon", {
  cuponNumero: {
    type: DataTypes.STRING(6),
    unique: true,
  },
  vigencia: {
    type: DataTypes.STRING,
  },
  canjeado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  establecimiento: {
    type: DataTypes.STRING,
  },
  producto: {
    type: DataTypes.STRING,
  },
});

module.exports = {
  Cupon,
  db: sequelize,
};
