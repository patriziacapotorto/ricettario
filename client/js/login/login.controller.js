angular.module('app').controller('LoginCtrl',function($scope,LoginSrv,$location,
  localStorageService){

$scope.accedi = function(){
  LoginSrv.login($scope.user.name,$scope.user.password).then(function(data){
    console.log(data);
    if(data!=''){
      localStorageService.set('user',$scope.user.name);
      $location.path('/home');
    }else {
      alert("Username/password errate");
      $location.path('/login');
    }
});

}

})
