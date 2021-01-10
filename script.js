// function myFunction() {
        //     var x = document.getElementById("email").innerHTML;
        //     document.getElementById("demo").innerHTML = "Hello World";
        // }

function insertEmail(){
    var email = document.getElementById('email').value
    console.log(email);
    console.log(typeof(email));
    return checkEmail(email);
}

function validEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function checkEmail(email){
    if(validEmail(email)){
        document.getElementById('c2').style.display = "none"
        return document.getElementById('myModal').style.display = "block"
    }else{
        document.getElementById('email').style.boxShadow = "0 0 0 3px rgb(255, 0, 0)"
        return document.getElementById('demo').innerHTML = "A valid email is required";
    }
}

