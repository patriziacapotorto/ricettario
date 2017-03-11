var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var utenteSchema = new Schema({
                   username: {
                        type: String,
                        required: [true,'Username obbligatoria'],
                        unique: true
                         },
                   password: {
                         type: String,
                         required: [true,'Devi inserire la password']
                        },
                    avatar: {
                          type: String,
                          default: "http://www.ilmarghine.net/archivi/immagini/2016/C/cuoco21.jpg"
                         },
                    categoria:[{
                      type: String,
                      required: [true,'Devi inserire almeno una categoria'],
                      enum: ['Antipasto','Primo','Secondo','Contorno','Dolce']
                    }],
                    ricetta_id:
                      [{
                        type: Schema.Types.ObjectId,ref:'Ricette'
                      }],

});

var Utente = mongoose.model('Utente', utenteSchema);
module.exports = Utente;
