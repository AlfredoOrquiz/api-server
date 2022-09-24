'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const carsSchema = require('./cars.js');
const customerSchema = require('./customer.js');
const Collection = require('./Collection');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

let herokuOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}
console.log(DATABASE_URL);
let sequelize = new Sequelize(DATABASE_URL, herokuOptions);

const CarsModel = carsSchema(sequelize, DataTypes);
const CustomerModel = customerSchema(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  Cars: new Collection(CarsModel),
  Customer: new Collection(CustomerModel),
};