import { Sequelize, Model, DataTypes } from "sequelize";
const user = "postgres";
const host = "localhost";
const database = "asd";
const password = "hello123";
const port = "5432";
const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
  sync: true, //create the table if it not exists
});
class Dog extends Model {}
Dog.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "dog",
    timestamps: false,
  }
);
const name = "Roger";
const age = 8;
Dog.create({ name, age })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("err", err);
  });
//from the tutorial "https://flaviocopes.com/sequelize/"
