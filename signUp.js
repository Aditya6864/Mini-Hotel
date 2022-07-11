var form = document.querySelector("form");

form.addEventListener("sign_up", function(event){
    event.preventDefault();
    var Data= {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value, 
    }

    localStorage.setItem("userData", JSON.stringify(Data));
})