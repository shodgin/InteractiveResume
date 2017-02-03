app.controller('resumeCtrl', function($scope, ResumeLoader){
    $scope.personalInfo = { firstName: 'Scott', lastName: 'Hodgin' } ;
    ResumeLoader.fetchResume('content/ScottHodginResume.json')
        .then(function(response) {
            $scope.data = response.data;
        });
});