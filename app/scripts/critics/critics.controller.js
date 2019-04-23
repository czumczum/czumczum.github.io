(() => {
  'use strict';

angular.module('moviesReviewsTestApp')
  .controller('CriticsController', CriticsController);

  function CriticsController(apiService, criticsEndpoint, moviesEndpoint) {
    const vm = this;
    vm.criticsList = {};
    vm.movies = [];
    vm.reviewsCount = reviewsCount;
    vm.picksCount = picksCount;

    activate();

    function activate() {
      apiServices();
    };
    

  function apiServices() {
        // Get movies list from API to count reviews and critics pick
        apiService.get(moviesEndpoint)
          .then(movies => {
              vm.movies = movies;
          });

    // Get critics list from API to populate page
        return apiService.get(criticsEndpoint)
          .then(critics => {
              vm.criticsList = critics;
          });
  }


  // Those two functions are something I'd put on the backend
  // and work on the database selectively instead of the whole data
  function reviewsCount(critic) {
    return vm.movies.reduce((n, movie) => {
      return n + (movie.byline == `${critic}`.toUpperCase());
    }, 0);
  };

  function picksCount(critic) {
    return vm.movies.reduce((n, movie) => {
      return n + (movie.byline == `${critic}`.toUpperCase() && movie.critics_pick);
    }, 0);
  };
  
}

})();
