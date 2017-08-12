 /**
 * @author: Amey Parundekar
 * get-books
 */
app.controller('getBooks', function($scope, $http) { 
<<<<<<< HEAD
    $http.get("https://dysprosium60.hasura-app.io/get-books").success(function(response){
=======
    $http.get("https://dysprosium60.hasura-app.io//get-books").success(function(response){
>>>>>>> remdev/master
        $scope.books = response;
    }); 
});

