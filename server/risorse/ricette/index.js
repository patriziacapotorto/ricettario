var express = require('express');
var router = express.Router();
var Ricette = require('./riccontroller.js');

//rotta che restituisce le ricette
router.get('/', Ricette.getRicette);

//rotta che restituisce una ricetta
router.get('/:id([0-9a-z]{24})', Ricette.dettaglioRicetta);

//rotta che crea una ricetta
router.post('/', Ricette.creaRicetta);

//rotta che cerca una ricetta per ingrediente o categoria
router.get('/cerca', Ricette.cercaperIngrediente);

module.exports= router;
