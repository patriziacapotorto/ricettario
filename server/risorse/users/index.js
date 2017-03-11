var express = require('express');
var router = express.Router();
var Utente = require('./userscontroller.js');


//rotta che crea un utente
router.post('/', Utente.creaUtente);

//rotta che ritorna gli utenti
router.get('/', Utente.getUtenti);

//rotta che ritorna il dettaglio utente
router.get('/:id([0-9a-z]{24})', Utente.dettaglioUtente);

//rotta per la ricerca per categoria
router.get('/categoria',Utente.ricercaUtenteperCategoria);

//rotta per la ricerca per username
router.get('/username',Utente.ricercaUtenteperUsername);

//rotta che aggiunge una categoria
router.put('/categoria/:id([0-9a-z]{24})', Utente.aggiungiCategoria);

//rotta che aggiunge una ricetta preferita (ricetta_id)
router.put('/ricetta/:id([0-9a-z]{24})', Utente.aggiungiRicettaPreferita);

//rotta che elimina una categoria
router.put('/eliminacategoria/:id([0-9a-z]{24})', Utente.eliminaCategoria);

//rotta che elimina una ricetta preferita (ricetta_id)
router.put('/eliminaricettapreferita/:id([0-9a-z]{24})', Utente.eliminaRicettaPreferita);

//rotta che aggiorna i dati di un utente
router.put('/id/:id([0-9a-z]{24})', Utente.updateUtente);


//rotta che elimina una ricetta
// router.delete('/:id([0-9a-z]{24})', Utente.eliminaUtente);

module.exports= router;
