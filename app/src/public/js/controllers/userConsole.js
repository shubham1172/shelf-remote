 /**
 * @author: Amey Parundekar
 * user-console
 */
app.controller('userConsole', function($scope, $http) { 
<<<<<<< HEAD
    $http.get("https://dysprosium60.hasura-app.io/user-info").success(function(response){
=======
    $http.get("https://dysprosium60.hasura-app.io//user-info").success(function(response){
>>>>>>> remdev/master
        $scope.info = response;
        }); 
    });