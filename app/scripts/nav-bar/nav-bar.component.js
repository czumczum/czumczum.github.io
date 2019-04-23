(() => {
  'use strict';

    angular
        .module('moviesReviewsTestApp')
        .component('navBar', {
            controller: 'NavBarController',
            controllerAs: 'nav',
            templateUrl: 'app/scripts/nav-bar/nav-bar.html'
        });

})();