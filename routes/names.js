'use strict';

const express = require('express');
let router = express.Router();
let Name = require('../models/name');

//   /names  router

router.get('/', function(req, res) {
  Name.get(function(err, names) {
    if(err) return res.status(400).send(err);
    res.send(names);
  });
});

router.post('/', function(req, res) {
  Name.create(req.body.name, function(err) {
    if(err) return res.status(400).send(err);
    res.send(); // empty response (code 200)
  });
});

router.delete('/:id', (req, res) => {
  Name.delete(req.params.id, err => {
    if(err) return res.status(400).send(err);
    res.send(); // empty response (code 200)
  });
});

module.exports = router;
