'use strict';

const { response } = require('express');
const express = require('express');
const app = express();
const logger = require('./middlewares/logger.js');
const validator = require('./middlewares/validator.js');

app.use(logger);

app.get('/', (request, response) => {
  try {
    response.status(200).send('I am the proof of life');
  } catch (e) {
    console.log(e);
  }
});

app.get('/cars', validator, (request, response) => {
  response.json({
    name: request.query.name
  });
});

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('App is running on port :: ' + port);
    });
  },
  app
}