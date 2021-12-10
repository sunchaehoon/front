//const loginForm = document.querySelector("#login-form");      //class, id 둘다

// const loginForm = document.getElementById("login-form");        //id만
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");


function onLoginSubmit(event) {      //submit --> 엔터를 누르거나 버튼을 클릭할 때 발생함
    event.preventDefault();         //
    //const username = loginInput.value;      //document의 input에 입력한 값
    //console.log(username);
    console.log(loginInput.value);      //버튼을 클릭해도 새로고침이 안됨
}

function handleLinkClick(event) {
    event.preventDefault();     //event 기능 막음
    console.log(event);
    alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", handleLinkClick)
