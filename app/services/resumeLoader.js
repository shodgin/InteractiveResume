app.service('ResumeLoader', function($http, $q) {
    this.fetchResume = function(url) {
        return $http.get(url);
    }
});