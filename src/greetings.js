const loginForm = document.querySelector("#f-login");
const LoginName = document.querySelector("#f-login input");
const greetings = document.querySelector(".greetings");

const KEY_USER_NAME = "username";
const KEY_HIDDEN = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();

    const username = LoginName.value;
    localStorage.setItem(KEY_USER_NAME, username);

    const todoForm = document.querySelector("#f-todo");
    todoForm.classList.remove("hidden");

    paintGreetings(username);
}

function paintGreetings(username) {
    loginForm.classList.add(KEY_HIDDEN);
    greetings.innerText = `Hello, ${username}!`;
}

const savedUserName = localStorage.getItem(KEY_USER_NAME);

if(savedUserName === null) {
    loginForm.classList.remove(KEY_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUserName);
}
