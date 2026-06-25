function login() {

    const password =
        document.getElementById("password").value;

    if(password === "ApprezzateLoSforzo:)") {

        localStorage.setItem("loggedIn", "true");

        document
            .getElementById("password-screen")
            .style.display = "none";

        document
            .getElementById("site-content")
            .classList.remove("hidden");

    } else {

        document
            .getElementById("error")
            .innerText = "Incorrect password";
    }
}
window.onload = function() {

    if(localStorage.getItem("loggedIn") === "true") {

        document
            .getElementById("password-screen")
            .style.display = "none";

        document
            .getElementById("site-content")
            .classList.remove("hidden");
    }
};
function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "index.html";
}
