'use strict';

const express = require('express');
const carsRouter = require('./routes/cars.js');
const app = express();

app.use(express.json());
app.use(carsRouter);
app.get('/', (request, response) => {
  try {
    response.status(200).send('Proof that Nebraska is #1');
  } catch (e) {
    console.log(e);
  }
});

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log("App is listening on port: " + port);
    });
  },
  app
}