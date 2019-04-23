(() => {
  'use strict';

  angular.module('moviesReviewsTestApp')
    .value('baseApi', '/app/data')
    .value('moviesEndpoint', '/movie-reviews.json')
    .value('criticsEndpoint', '/critics.json')


})();