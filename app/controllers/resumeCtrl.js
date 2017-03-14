app.controller('resumeCtrl', function($scope, ResumeLoader){
    ResumeLoader.fetchResume('content/ScottHodginResume.json')
        .then(function(response) {
            $scope.data = response.data;
        });
    $scope.getTech = function(category) {
        return $scope.data.technology.filter(function(tech) {return tech.category === category});
    };
    $scope.getTechCategories = function(){      
        var categories = {};

        for (var i in $scope.data.technology){
            categories[$scope.data.technology[i].category] = true;
        }

        return Object.keys(categories);
    };
});