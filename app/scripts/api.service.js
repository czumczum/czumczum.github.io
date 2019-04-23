(() => {

    angular
        .module('moviesReviewsTestApp')
        .factory('apiService', ApiService);

    function ApiService(baseApi, $http) {

        return {
            get: get
        };

        function get(endpoint) {
            var request = {
                method: 'get',
                url: `${baseApi}${endpoint}`,
                dataType: 'json',
                contentType: "application/json",
                catche: true
            };
              return $http(request)
                .then(jsonData => {
                    return jsonData.data;
            },error => {
                console.log(error);
            });

    }
};
})();
