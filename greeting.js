//const loginForm = document.querySelector("#login-form");      //class, id 둘다

// const loginForm = document.getElementById("login-form");        //id만
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");


function onLoginSubmit(event) {      //submit --> 엔터를 누르거나 버튼을 클릭할 때 발생함
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);      //Element.classList.add --> 명시된 클래스를 추가하는 메서드
    const username = loginInput.value;      //document의 input에 입력한 값
    localStorage.setItem(USERNAME_KEY, username);     //storage에 유저 닉네임 저장
    //greeting.innerText = "Hello " + USERNAME_KEY;   //방법1
    //greeting.innerText = `Hello ${username}`;   //방법2     변수를 string 안에 포함시키는 방법
    //greeting.classList.remove(HIDDEN_CLASSNAME);    //Element.classList.remove --> 명시된 클래스를 제거하는 메서드
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event) {
//     event.preventDefault();     //event 기능 막음
//     console.log(event);
//     alert("clicked");
// }

const savedUsername = localStorage.getItem(USERNAME_KEY);

// link.addEventListener("click", handleLinkClick)

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}








