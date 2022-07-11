var form = document.querySelector("form");

var userData1 = JSON.parse(localStorage.getItem("userData"));

form.addEventListener("log_in", function(event){
    event.preventDefault();
    var Data= {
        email: form.email.value,
        passowerd: form.password.value,
    }

    if (userData1.email == Data.email && userData1.password == Data.password){
        alert("Login successful");
        localStorage.setItem("nextStep", JSON.stringify(userData1))
    }
    else if (userdata.passeord == null){
        alert("Wrong credentilas");
    }
    else if (userdata.email == null){
        alert("User doesn't exist, Sign Up");
    }
})