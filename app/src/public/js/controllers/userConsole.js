 /**
 * @author: Amey Parundekar
 * user-console
 */
app.controller('userConsole', function($scope, $http) { 
    $http.get("https://dysprosium60.hasura-app.io/user-info").success(function(response){
        $scope.info = response;
        }); 
    });