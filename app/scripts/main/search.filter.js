(() => {
  'use strict';

angular.module('moviesReviewsTestApp').filter('searchFilter', SearchMovies);

  function SearchMovies() {

    return (item, rating, limit) =>  {

      console.log(limit);
      // if (date) { 

      //   date = date.toISOString().slice(0,10);

      //   console.log(date, item.publication_date)
      //   return item.publication_date == date;
      // }

      return item;
    }
  //   return ($scope, element) => {
  //     element.bind("keyup", () => {
  //       let txt = element.val();

  //       console.log(txt);

  //       if(txt.length) {
  //         $scope.search(txt);
  //       }
  //     });
  // };
};

})();
