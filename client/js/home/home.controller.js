angular.module('app').controller('HomeCtrl',function($scope,LoginSrv,$location,
  localStorageService){

if(!(localStorageService.get('user'))) {
  $location.path('/login');
}

$scope.logout = function(){
   localStorageService.remove('user');
   $location.path('/login');
}

})
