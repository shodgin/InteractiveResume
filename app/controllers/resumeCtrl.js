app.controller('resumeCtrl', function($scope, ResumeLoader){
    ResumeLoader.fetchResume('content/ScottHodginResume.json')
        .then(function(response) {
            $scope.data = response.data;
        });
    $scope.getTech = function(catagory) {
        return $scope.data.technology.filter(function(tech) {return tech.catagory === catagory});
    };
    $scope.getTechCatagories = function(){      
        var catagories = {};

        for (var i in $scope.data.technology){
            catagories[$scope.data.technology[i].catagory] = true;
        }

        return Object.keys(catagories);
    };
});