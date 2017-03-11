var mongoose = require('mongoose');
var Utente = require('./usersmodel.js');

module.exports = (function(){

   var creaUtente = function(req,res){
     var nuovoutente = new Utente(req.body);
     nuovoutente.save().then(function(data){
       res.status(200).json(data);
     }).catch(function(err){
       res.status(500).json(err);
     });
   }

   var dettaglioUtente = function(req,res){
    var id = req.params.id;
    Utente.findById(id)
    .populate('ricetta_id').exec().then(function(data){
     res.status(200).json(data);
   }).catch(function (err) {
   throw err;
   });
  };

   var getUtenti = function(req,res){
     Utente.find()
     .populate('ricetta_id').exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err) {
    res.status(500).send(err);
    });
   }


   return {
     creaUtente: creaUtente,
     getUtenti: getUtenti,
     dettaglioUtente: dettaglioUtente
   }
})();
