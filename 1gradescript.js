// const upload = document.querySelector(".upload");
// const popup = document.querySelector('.upload-main');

// function uploadscreen(){
//     popup.classList.toggle('.hidden');
// }


// upload.addEventListener('click',uploadscreen);

// function show() {
//     if($('.upl-all').css('display') == 'none')
//     $('.upl-all').show();
// }

// const loginkeep = document.getElementById("lgkeep");

// function toggleimg() {
//     document.getElementById("lgkeep").src = "/img/lgkeepp.png";
// }

// let imgch = document.getElementById("lgkeep");

//     function toggleimg() {
//     if(imgch == "img/lgkeep.png"){
//         imgch = "img/lgkeepp.png";
//     }
//     else{
//         imgch = "img/lgkeep.png";
//     }
// }

const loginVl = document.querySelector("#subsb");
const gId = document.querySelector(".text-field1");
const gBn = document.querySelector(".text-field2");
const formm = document.querySelector(".formm");

// function hrefLink() {
//     if(gId.value == null || gBn.value == null) {
//         alert("다시입력");
//     } else {
//         loginVl.location.href = "index.html";
//     }
// }

// formm.addEventListener("submit", hrefLink)

function hrefLink(event) {
    event.preventDefault();
    if(gId.value === "" || gBn.value === "") {
        alert("아이디 또는 패스워드를 다시입력하세요");
        gId.value = "";
        gBn.value = "";
    } else {
    location.href = "index.html";
    }
}


function toggleimg() {
    document.getElementById("lgkeep").src = "img/lgkeepp.png";
}






