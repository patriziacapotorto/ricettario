var express = require('express');
var router = express.Router();
var Utente = require('./userscontroller.js');


//rotta che crea un utente
router.post('/', Utente.creaUtente);

//rotta che ritorna gli utenti
router.get('/', Utente.getUtenti);

//rotta che ritorna il dettaglio utente
router.get('/:id([0-9a-z]{24})', Utente.dettaglioUtente);


module.exports= router;
