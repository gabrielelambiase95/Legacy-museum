function login() {

    const password =
    document.getElementById("password").value;

    if(password === "ApprezzateLoSforzo:)"){

        document
        .getElementById("password-screen")
        .style.display = "none";

        document
        .getElementById("site-content")
        .classList.remove("hidden");

    }else{

        document
        .getElementById("error")
        .innerText =
        "Incorrect password";
    }
}
