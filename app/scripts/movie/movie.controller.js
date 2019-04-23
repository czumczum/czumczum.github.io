(() => {
  'use strict';

angular.module('moviesReviewsTestApp')
  .controller('MovieController', MovieController);

  function MovieController($stateParams, apiService, moviesEndpoint) {
    const vm = this;
    vm.params = $stateParams; // inside state is routeId (movie title in this case) and saved search filters
    vm.movies = null;
    vm.movie = null;
    vm.convertFromSlug = convertFromSlug;
    vm.capitalize = capitalize;
    activate();

    function activate() {
      apiService.get(moviesEndpoint)
      .then(movies => {
          vm.movies = movies;

          findMovie();
      });
  };

  console.log(vm.params);

  function findMovie() {
    if (vm.params.routeId) {
    vm.movie = vm.movies.find(m => m.display_title == vm.params.routeId)
    } else {
      // This is just something extra to retreive the data
      // when accessing movie's review from its url.
      // Although, using field that doesn't exist in original database isn't a good idea.
      // I'd change that to ID or add slug field to dataset.
      let title = convertFromSlug(vm.params.movieSlug);
      vm.movie = vm.movies.find(m => m.display_title.toLowerCase() == title);
    }
  };
  
    function convertFromSlug(movie) {
      return movie.replace(/-/g, ' ');
      };

    function capitalize(string) {
      if (string) {
        let newString = string.toLowerCase();
        return newString.charAt(0).toUpperCase() + newString.slice(1);
      }
    };

}
})();
