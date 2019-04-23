(() => {
'use strict';

angular.module('moviesReviewsTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
  ])
  .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    const states = [{
      name: 'home',
      url: '',
      templateUrl: '/scripts/main/main.html',
      controller: 'MainController',
      params: { search: {
        term: null,
        rating: null,
        date: null,
        pick: null
      } }
  },
  {
    name: 'movie',
    url: '/movies/:movieSlug',
    templateUrl: '/scripts/movie/movie.html',
    controller: 'MovieController',
    params: { routeId: null, search: {
      term: null,
      rating: null,
      date: null,
      pick: null
    } }
}, {
    name: 'critics',
    url: '/critics',
    templateUrl: '/scripts/critics/critics.html',
    controller: 'CriticsController'
}];
      states.forEach(state => {
        $stateProvider.state(state);
    });
    $locationProvider.html5Mode(true);

    $urlRouterProvider.when('/', ['$state', '$match', ($state, $match) => {
      $state.go('home');
  }]);
  });

})();