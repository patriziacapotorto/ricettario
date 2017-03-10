var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ricettaSchema = new Schema({
                   titolo: {
                        type: String,
                        required: [true,'Devi inserire il titolo']
                         },
                   categoria: {
                         type: String,
                         enum: ['Antipasto','Primo','Secondo','Dolce'],
                         required: [true,'Devi inserire il cognome']
                        },
                    immagini: [{
                          type: String,
                          required: [true,'Devi inserire almeno una immagine']
                         }],
                       ingredienti: [
                         {
                             type: String,
                             required: [true,'Devi inserire gli ingredienti']
                            }
                          ],
                    difficoltà: {
                      type: String,
                      enum: ['Facile','Medio','Difficile'],
                      required: [true,'Devi inserire la difficoltà']
                    },

                    preparazione: {
                      type: String,
                      required: [true,'Devi inserire la preparazione']
                    },

                    tempodicottura: {
                      type: Number,
                      required: [true,'Devi inserire a cottura'],
                      min: [5, "troppo poco"],
                      max: [180, "troppo"],
                    },
                    temperaturadicottura: {
                      type: Number,
                      required: [true,'Devi inserire a cottura'],
                      min: [5, "non abbastanza caldo"],
                      max: [250, "si brucia"],
                    },
                    voto: {
                      type: Number,
                      min: [1, "poco"],
                      max: [5, "troppo"],
                    },
                    commenti: [{
                      autore: {
                        type: Schema.Types.ObjectId,ref:'Users'
                      },
                      commento:String
                    }]

});

var Ricette = mongoose.model('Ricette', ricettaSchema);
module.exports = Ricette;
