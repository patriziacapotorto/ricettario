angular.module('app').service('LoginSrv',function($http){

var login = function(username,password){
  console.log(username,password);
  return $http({
    url: 'http://localhost:3003/users/username/?username='+username+'&password='+password,
    method: 'GET'
  }).then(function(res){
    return res.data;
  }).catch(function(err){
    return err;
  });
}

  return{
     login: login

  }
})
