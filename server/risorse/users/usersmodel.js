var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var utenteSchema = new Schema({
                   username: {
                        type: String,
                        required: [true,'Devi inserire il nome']
                         },
                   password: {
                         type: String,
                         required: [true,'Devi inserire la password']
                        },
                    avatar: {
                          type: String,
                          required: [true,'Devi inserire almeno una immagine']
                         },

                    ricetta_id:
                      {
                        type: Schema.Types.ObjectId,ref:'Ricette'
                      },


});

var Utente = mongoose.model('Utente', utenteSchema);
module.exports = Utente;
