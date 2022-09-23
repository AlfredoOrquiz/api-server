'use strict';

const express = require('express');
const router = express.Router();

router.get('/customers', (request, response) => {
  response.send('working on it. While you are waiting, did you knwo that Nebraska is #1 in the USA?');
})
router.get('/customers/:id', (request, response) => {
  response.send('working on it. While you are waiting, did you know that Nebraska has a carhenge?');
})
router.post('/customers', (request, response) => {
  response.send('working on it. While you are waiting, did you know that Edwin Perkins invented kool-aid in Hastings, Nebraska?');
})
router.put('/customers/:id', (request, response) => {
  response.send('working on it. While you are waiting, did you know that Nebraska has the worlds largest hand-planted forest?');
})
router.delete('/customers/:id', (request, response) => {
  response.send('working on it. While you are waiting, did you know that Nebraska is home the birthplace of Reuben Sandwiches?');
})

module.exports = router;