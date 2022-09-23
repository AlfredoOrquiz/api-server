'use strict';

const express = require('express');
const carsRouter = require('./routes/cars.js');
const app = express();

app.use(express.json());
app.use(carsRouter);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log("App is listening on port: " + port);
    });
  },
  app
}