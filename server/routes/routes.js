module.exports= function(app, express, path){

//rotta per gli utenti
app.use('/users',require("./../risorse/users"));

//rotta per le risorse
app.use('/ricette',require("./../risorse/ricette"));

};
