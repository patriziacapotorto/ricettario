module.exports= function(app, express, path){
var bodyparser = require('body-parser');
//rotta per gli utenti
app.use('/users',require("./../risorse/users"));
//rotta per le ricette
app.use('/ricette',require("./../risorse/ricette"));

//rotte statiche
app.use(bodyparser.json());
app.use('/bootstrap',express.static(path.join(__dirname,'..','..','node_modules','bootstrap','dist')));
app.use('/jquery',express.static(path.join(__dirname,'..','..','node_modules','jquery','dist')));
app.use('/',express.static(path.join(__dirname,'..','..','client')));
app.use('/js',express.static(path.join(__dirname,'..','..','client','js')));
app.use('/angular',express.static(path.join(__dirname,'..','..','node_modules','angular')));
app.use('/angular-ui-router',express.static(path.join(__dirname,'..','..','node_modules','angular-ui-router')));
app.use('/angular-local-storage',express.static(path.join(__dirname,'..','..','node_modules','angular-local-storage')));
app.use('/angular-aria',express.static(path.join(__dirname,'..','..','node_modules','angular-aria')));
app.use('/angular-material',express.static(path.join(__dirname,'..','..','node_modules','angular-material')));
app.use('/angular-animate',express.static(path.join(__dirname,'..','..','node_modules','angular-animate')));


app.get('/', function(req,res){
res.sendFile(path.join(__dirname, '..', '..', 'client','index.html'));
})
};
