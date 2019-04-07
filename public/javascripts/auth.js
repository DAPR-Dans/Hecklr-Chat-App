

$(document).ready(
      
    function() {     
      
        
         <!-- Event handler for registration attempts -->
         
        $("#reg-form").submit(function (event) {
            event.preventDefault();
            $.ajax({
           
                type: 'POST',
                url: '/users/register',
                dataType: 'json',
                data: {
                    'user_name': event.target.inputUsername.value,
                    'password': event.target.inputPassword.value
                },
                success: function(token){
                    $(location).attr('href', '/users/chatroom' );
		<!-- Redirect to a login page-->
                },
                error: function(errMsg) {
                    swal(
                        'Oops...',
                        errMsg.responseJSON.body,
                        'error'
                    )
                }
            });
        }); 

 
$("#log-form").submit(function (event) {
     
            event.preventDefault();
            $.ajax({
                type: 'POST',
                url: '/users/login',
                dataType: 'json',
                data: {
                    'user_name': event.target.inputUsername.value,
                    'password': event.target.inputPassword.value
                },
                success: function(token){
                     $(location).attr('href', '/users/chatroom' );
		  <!-- Redirect to logged in page-->
                },
                error: function(errMsg) {
                    swal(
                        'Oops...',
                        errMsg.responseJSON.body,
                        'error'
                    )
                }
            });
        });
        
<!--array to store user messages-->
            var array = []; 
<!--jqueery function to send messages-->
    $("#SubmitButton").click(function(){
    	
       
        var comment = $("#message1").val();
        array.push({ comment:comment});                
 
        var message = "";
<!--appends user input to messages with the hep of the array-->
        for(var i=0; i<array.length; i++)
        {     
       
        message += "<p> Question : " + array[i].comment + "<br> " + "</p>"
        
        
        $("#comments").html(message);
        
        }
              event.preventDefault();
            $.ajax({
           
                type: 'POST',
                url: '/users/comments',
                dataType: 'json',
                data: {
                    'Comment_val': event.target.message1.value,
                    
                },
                success: function(token){
                    $(location).attr('href', '/users/chatroom' );
		<!--Redirect to a login page-->
                },
                error: function(errMsg) {
                    swal(
                        'Oops...',
                        errMsg.responseJSON.body,
                        'error'
                    )
                }
            });
        
        
    });
      
});