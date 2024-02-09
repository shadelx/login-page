const user = {
    username : "mordby",
    password : "1234",
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-button");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === user.username && password === user.password) {
        alert("You have successfully logged in.");
        location.assign("app.html");
    } else {
        alert("not the right answer")
    }
})