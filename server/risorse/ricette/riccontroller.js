var mongoose = require('mongoose');
var Ricette = require('./ricmodel.js');

module.exports = (function(){

   var getRicette = function(req,res){
     Ricette.find()
     .populate({
       path:'commenti.autore',
       select:'username'}).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err) {
    res.status(500).send(err);
    });
   }

   var dettaglioRicetta = function(req,res){
    var id = req.params.id;
    Ricette.findById(id)
    .populate('commenti.autore').exec().then(function(data){
     res.status(200).json(data);
   }).catch(function (err) {
   throw err;
   });

  };

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
};

   var votoRicetta = function(req,res){
    var id = req.params.id;
    var voto = req.body.voto;
    Ricette.findById(id).exec().then(function(data){
    data.voto.nvoti +=1;
    data.voto.svoti +=voto;
     return data.save();
   }).then(function(data){
     res.status(200).json(data);
   }).catch(function (err) {
   throw err;
   });
  };

  var commentoRicetta = function(req,res){
    var id = req.params.id;
    var autore = req.body.autore;
    var commento = req.body.commento;
    Ricette.findById(id).exec().then(function(ricetta){
      var commento = req.body;
      commento.datacreazione = new Date();
      ricetta.commenti.push(req.body);
      return ricetta.save();
    }).then(function(data){
      res.status(200).json(data);
    }).catch(function (err) {
    throw err;
    });
  };

  var eliminaRicetta = function(req,res){
    var id = req.params.id;
    Ricette.findByIdAndRemove(id).then(function(data){
    res.status(200).json(data);
   }).catch(function (err) {
   throw err;
   });
  };


   return {
     getRicette: getRicette,
     dettaglioRicetta: dettaglioRicetta,
     creaRicetta: creaRicetta,
     cercaperIngrediente: cercaperIngrediente,
     votoRicetta: votoRicetta,
     commentoRicetta: commentoRicetta,
     eliminaRicetta: eliminaRicetta
   }
})();
