 /**
 * @author: Amey Parundekar
 * get-books
 */
app.controller('getBooks', function($scope, $http) { 
    $http.get("https://dysprosium60.hasura-app.io/get-books").success(function(response){
        if(response.length==0){
                 $('#no-books-explore').css('display','block');
            }else{
                $('#no-books-explore').css('display','none');
            }
        $scope.books = response;
    }); 
});

