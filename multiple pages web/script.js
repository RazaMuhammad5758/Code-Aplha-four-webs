let username = document.getElementById('username');
let useremail = document.getElementById('useremail');
let flag = 1;

function validation(){
    if (username.value  == "") {
        document.getElementById('nameError').innerHTML="Enter User Name";
        flag = 0;
    }
    else if (username.value.length < 3){
        document.getElementById('nameError').innerHTML="User name must greater than 2 characters";
        flag = 0;
    }
    else{
        document.getElementById('nameError').innerHTML= ""
        flag = 1;
    }
    if (useremail.value == ""){
        document.getElementById('passError').innerHTML="Enter password";
        flag = 0;
    }
    else{
        document.getElementById('passError').innerHTML= ""
        flag = 1;
    }
    if(flag){
        return true;
    }
    else{
        return false;
    }
}