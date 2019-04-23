(() => {
  'use strict';

angular.module('moviesReviewsTestApp')
  .controller('MainController', MainController);

  function MainController(apiService, moviesEndpoint, $scope, $stateParams) {
    const vm = this;
    vm.movies = null;
    vm.convertToSlug = convertToSlug;
    vm.search = $scope.search; //search function from search.directive
    vm.state = $stateParams;

    /* Search inputs inside controller view */
    vm.searchTitle = ''; // input value inside controller's view
    vm.searchPick = false;
    vm.searchRating = '';
    vm.searchDate = '';

    activate();

    function activate() {
      apiService.get(moviesEndpoint)
      .then(movies => {
          vm.movies = movies;
          vm.moviesSource = movies;
      });

      retreiveSearchFilters();
  };

  function retreiveSearchFilters() {
    // Retreiving all filters one by one from controller's state via stateParams

    if (vm.state.search.term) { // state.search is a container for search value
      vm.searchTitle = vm.state.search.term;
    }

    if (vm.state.search.date) {
      vm.searchDate = vm.state.search.date;
    }

    if (vm.state.search.pick) {
      vm.searchPick = vm.state.search.pick;
    }

    if (vm.state.search.rating) {
      vm.searchRating = vm.state.search.rating;
    }

  } 

  // converting movie title to url slug -> app is using that slug as ID for movies
  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'');
    }

}
})();
