// const clock = document.getElementById("clock");
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;   //Element.innerText --> element 안의 text 값들만 가져옴.
}

getClock();     //1초 기다리지 않고 바로 시계 표시
setInterval(getClock, 1000);    //1000 = 1초
//setTimeout(sayHello, 5000);
