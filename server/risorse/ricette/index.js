var express = require('express');
var router = express.Router();
var Ricette = require('./riccontroller.js');

//rotta che restituisce le ricette
router.get('/', Ricette.getRicette);

//rotta che restituisce una ricetta
router.get('/:id([0-9a-z]{24})', Ricette.dettaglioRicetta);

//rotta che crea una ricetta
router.post('/', Ricette.creaRicetta);

module.exports= router;
