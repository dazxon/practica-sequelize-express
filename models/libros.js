// - la carpeta models con el archivo libros.js donde tenemos que crear nuestro modelo con los campos:
//   titulo: string,
//   autor: string,
//   ventas: biginit

const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");

class Libros extends Model {}

Libros.init(
  // atributtes of the model => COLUMNS IN DB
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ventas: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  // model options HERE !
  {
    sequelize: db, // db instance
    modelName: "libros", // name of the model
  }
);

module.exports = Libros;
