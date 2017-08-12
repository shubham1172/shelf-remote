 /**
 * @author: Amey Parundekar
 * get-books
 */
app.controller('getBooks', function($scope, $http) { 
    $http.get("https://dysprosium60.hasura-app.io/get-books").success(function(response){
        $scope.books = response;
    }); 
});

