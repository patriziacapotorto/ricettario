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

  var updateUtente = function(req,res){
    var id = req.params.id;
    var newData = req.body;
    Utente.findByIdAndUpdate(id, newData).then(function(data){
      res.status(200).json(data);
    }).catch(function (err){
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

   var ricercaUtenteperCategoria = function(req,res){
     var categoria = req.query.categoria;
     Utente.find({
       "categoria":{$in:[categoria]}
     }).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err) {
    res.status(500).send(err);
    });
   };

var ricercaUtenteperUsername = function(req,res){
  var username = req.query.username;
  Utente.find({
    "username": username
  }).exec().then(function(data){
   res.status(200).json(data);
 }).catch(function (err) {
 res.status(500).send(err);
 });
};

var aggiungiCategoria = function(req,res){
  var id = req.params.id;
  var categoria = req.body.categoria;
  Utente.findById(id).exec().then(function(data){
    data.categoria.push(categoria);
    return data.save();
 }).then(function(data){
  res.status(200).json(data);
}).catch(function (err) {
res.status(500).send(err);
});
};

var eliminaCategoria = function(req,res){
  var id = req.params.id;
  var categoria = req.body.categoria;
  Utente.findById(id).exec().then(function(data){
    var indice = data.categoria.indexOf(categoria);
    data.categoria.splice(indice,1);
    return data.save();
 }).then(function(data){
  res.status(200).json(data);
}).catch(function (err) {
res.status(500).send(err);
});
};

var aggiungiRicettaPreferita = function(req,res){
  var id = req.params.id;
  var ricetta = req.body.ricetta_id;
  Utente.findById(id).exec().then(function(data){
    data.ricetta_id.push(ricetta);
    return data.save();
 }).then(function(data){
  res.status(200).json(data);
}).catch(function (err) {
res.status(500).send(err);
});
};

var eliminaRicettaPreferita = function(req,res){
  var id = req.params.id;
  var ricetta = req.body.ricetta_id;
  Utente.findById(id).exec().then(function(data){
    var indice = data.ricetta_id.indexOf(ricetta);
    data.ricetta_id.splice(indice,1);
    return data.save();
 }).then(function(data){
  res.status(200).json(data);
}).catch(function (err) {
res.status(500).send(err);
});
};

   return {
     creaUtente: creaUtente,
     getUtenti: getUtenti,
     dettaglioUtente: dettaglioUtente,
     ricercaUtenteperCategoria:ricercaUtenteperCategoria,
     ricercaUtenteperUsername: ricercaUtenteperUsername,
     aggiungiCategoria: aggiungiCategoria,
     eliminaCategoria: eliminaCategoria,
     aggiungiRicettaPreferita: aggiungiRicettaPreferita,
     eliminaRicettaPreferita: eliminaRicettaPreferita,
     updateUtente: updateUtente
   }
})();
