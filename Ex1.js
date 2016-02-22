function password() {
    
    var initial = document.getElementById("initial");
    var validate = document.getElementById("validate");
    
    var password = initial.value;
    var newPassword = validate.value;
    
    if(password.length < 8) {
        
        alert("The password is too short. It should be 8 characters or more");
    }
    
    else if(newPassword.length < 8) {
        
        alert("The second password is too short. It should be 8 characters or more");
    }  

    else if(password != newPassword) {
     
        alert("The two passwords do not match.");
    }
    
}