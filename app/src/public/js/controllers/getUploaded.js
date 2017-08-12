 /**
 * @author: Amey Parundekar
 * get-books
 */
app.controller('getUploaded', function($scope, $http) {
<<<<<<< HEAD
    $http.get("https://dysprosium60.hasura-app.io/get-uploaded").success(function(response){
=======
    $http.get("https://dysprosium60.hasura-app.io//get-uploaded").success(function(response){
>>>>>>> remdev/master
        $scope.uploads = response;
        if(response.length==0){
          $('#no-books').css('display','block');
          $("#upload-header").css('display','none');
        }
        $scope.custom = {
            'remove': 'Remove',
            'edit': 'Edit',
            'add': 'Add'
        }
    });

    var i = setTimeout(function(){

        $('.book-action').each(function(){
            var This = $(this);
            if(This.children('.available').html()==='true'){
                console.log(This.children('.available').html());
                This.children('.add-removed-book').css('display','none');
            }else{
                This.children('.remove-book').css('display','none');
            }
        });
        //XHR for removing book
        $('.remove-book').on('click',function(){
            var bookId = $(this).parent().attr('id');
            var This = $(this);
            var remove = new XMLHttpRequest();
            remove.onload = function(){
                if(remove.readyState = XMLHttpRequest.DONE){
                    if(remove.status === 200||remove.status===304){
                        This.css('display','none');
                        This.next().css('display','inline');
<<<<<<< HEAD
                        window.location.href = "https://dysprosium60.hasura-app.io/user-console.html#primary-info";
=======
                        window.location.href = "https://dysprosium60.hasura-app.io//user-console.html#primary-info";
>>>>>>> remdev/master
                        location.reload();
                    }else{
                        console.log(remove.responseText);
                    }
                }
            }
<<<<<<< HEAD
            remove.open('GET','https://dysprosium60.hasura-app.io/remove-book?id='+bookId,true);
=======
            remove.open('GET','https://dysprosium60.hasura-app.io//remove-book?id='+bookId,true);
>>>>>>> remdev/master
            remove.send(null);
        });

        $('.add-removed-book').on('click',function(){
            var This = $(this);
            var bookId = $(this).parent().attr('id');
            var addBook = new XMLHttpRequest();
            addBook.onload = function(){
                if(addBook.readyState = XMLHttpRequest.DONE){
                    if(addBook.status === 200){
                        This.css('display','none');
                        This.prev().css('display','block');
<<<<<<< HEAD
                        window.location.href = "https://dysprosium60.hasura-app.io/user-console.html#primary-info";
=======
                        window.location.href = "https://dysprosium60.hasura-app.io//user-console.html#primary-info";
>>>>>>> remdev/master
                        location.reload();
                    }else{
                        console.log(addBook.responseText);
                    }
                }
            }
<<<<<<< HEAD
            addBook.open('GET','https://dysprosium60.hasura-app.io/add-removed-book?id='+bookId,true);
=======
            addBook.open('GET','https://dysprosium60.hasura-app.io//add-removed-book?id='+bookId,true);
>>>>>>> remdev/master
            addBook.send(null);
        });
    },500);
});
