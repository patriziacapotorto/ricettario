var mongoose = require('mongoose');
var Ricette = require('./ricmodel.js');

module.exports = (function(){

   var getRicette = function(req,res){
     Ricette.find().exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err) {
    res.status(500).send(err);
    });
   }

   var dettaglioRicetta = function(req,res){
    var id = req.params.id;
    Ricette.findById(id).exec().then(function(data){
     res.status(200).json(data);
   }).catch(function (err) {
   throw err;
   });

  };


 //  var cercaperIngrediente = function(req,res){
 //   var ingrediente = req.query.ingrediente;
 //   Ricette.find({"ingredienti": ingrediente})
 //   .exec().then(function(data){
 //    res.status(200).json(data);
 //  }).catch(function (err) {
 //  throw err;
 //  });
 //
 // };

//ricerca per categoria o ingrediente
 var cercaperIngrediente = function(req,res){
    var ingrediente = req.query.ingrediente;
    var categoria = req.query.categoria;
    Ricette.find({$or: [{"ingredienti":ingrediente},{"categoria":categoria}]})
    .exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err){
    throw err;
    });
  };


   var creaRicetta = function(req,res){
     var nuovaricetta = new Ricette(req.body);
     nuovaricetta.save().then(function(data){
       res.status(200).json(data);
     }).catch(function(err){
       res.status(500).json(err);
     });

   }


   return {
     getRicette: getRicette,
     dettaglioRicetta: dettaglioRicetta,
     creaRicetta: creaRicetta,
     cercaperIngrediente: cercaperIngrediente
   }
})();
