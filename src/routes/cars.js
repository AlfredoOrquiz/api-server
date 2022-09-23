'use strict';

const express = require('express');
const { Cars } = require('../models');
const router = express.Router();

router.get('/cars', readCars);
router.get('/cars/:id', readOneCars);
router.post('/cars', createCars);

router.put('/cars/:id', (request, response, next) => {
  response.send('working on it');
});

router.delete('/cars/:id', (request, response, next) => {
  response.send('working on it');
});

async function readCars(request, response, next) {
  let carsRecords = await Cars.read();
  response.status(200);
  response.send(carsRecords);
}

async function readOneCars(request, response, next) {
  let carsRecord = await Cars.read(request.params.id);
  response.status(200);
  response.send(carsRecord);
}

async function createCars(request, response, next) {
  let carsRecord = await Cars.create(request.body);
  response.status(200);
  response.send(carsRecord);
}

module.exports = router;