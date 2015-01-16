var App = window.App = angular.module('App',
  [
    'ngRoute',
    'angular-underscore',
    'ui.bootstrap',
    'Scope.safeApply',
    'App.Controllers',
    'App.Filters',
    'App.Services',
    'App.Directives',
    'App.Routes'
  ]
);
