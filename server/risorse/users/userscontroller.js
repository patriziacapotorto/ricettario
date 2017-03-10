var mongoose = require('mongoose');
var Utente = require('./usersmodel.js');

module.exports = (function(){

  //  var getRicette = function(req,res){
  //    Ricette.find().exec().then(function(data){
  //     res.status(200).json(data);
  //   }).catch(function (err) {
  //   res.status(500).send(err);
  //   });
  //  }
  //
  //  var dettaglioRicetta = function(req,res){
  //   var id = req.params.id;
  //   Ricette.findById(id).exec().then(function(data){
  //    res.status(200).json(data);
  //  }).catch(function (err) {
  //  throw err;
  //  });
  //
  // };


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
    Utente.findById(id).exec().then(function(data){
     res.status(200).json(data);
   }).catch(function (err) {
   throw err;
   });
  };

   var getUtenti = function(req,res){
     Utente.find().exec().then(function(data){
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
