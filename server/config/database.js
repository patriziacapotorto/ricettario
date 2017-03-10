module.exports = function (mongoose){
  mongoose.connect('mongodb://admin:admin@ds127260.mlab.com:27260/ricettario', function(err){
    if(err){console.log(err);}else{console.log("connesso al db");}
  });
};
