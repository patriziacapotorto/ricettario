angular.module('app',['ui.router','ngMaterial','LocalStorageModule'])
  .config(function($mdThemingProvider) {$mdThemingProvider.theme('default')
              .primaryPalette('pink')
              .accentPalette('pink')
              .warnPalette('red')
              .backgroundPalette('cyan')
});
