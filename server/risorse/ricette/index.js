var express = require('express');
var router = express.Router();
var Ricette = require('./riccontroller.js');

router.get('/', Ricette.getRicette);

module.exports= router;
