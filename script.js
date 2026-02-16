// hour hand:- 
// 12 hour = 360 deg
// 1 hour = 30 deg
// n hour = 30n deg
// 60 min = 30 deg
// 1 min = 1/2 deg
// n min = n/2 deg
// formula = 30n + n/2 deg  -- 1

// min hand:- 
// 60 min = 360 deg
// 1 min = 6 deg
// n min = 6n deg    -- 2

// sec hand:- 
// 60 sec = 360 deg
// 1 sec = 6 deg
// n sec = n deg     -- 3


let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secHand = document.querySelector(".sec-hand");

let button = document.querySelector(".toggle-btn");

let digiH = document.querySelector(".digi-h");
let digiM = document.querySelector(".digi-m");
let digiS = document.querySelector(".digi-s");

let analog = document.querySelector(".analog-clock");
let digital = document.querySelector(".digi");
let btnH4 = document.querySelector(".toggle-btn h4");

setInterval(() => {
    let time = new Date();

    let hour = time.getHours() % 12;
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let hdeg = 30 * hour + min / 2;
    let mdeg = 6 * min + sec * 0.1;
    let sdeg = 6 * sec;

    hourHand.style.transform = `rotate(${hdeg}deg)`;
    minHand.style.transform = `rotate(${mdeg}deg)`;
    secHand.style.transform = `rotate(${sdeg}deg)`;

    digiH.textContent = hour < 10 ? "0" + hour : hour;
    digiM.textContent = min < 10 ? "0" + min : min;
    digiS.textContent = sec < 10 ? "0" + sec : sec;

}, 1000);

button.addEventListener("click", ()=>{

    if(btnH4.textContent === "Digital Clock"){
        analog.style.display = "none";
        digital.style.display = "flex";
        btnH4.textContent = "Analog Clock";
    }
    else{
        analog.style.display = "initial";
        digital.style.display = "none";
        btnH4.textContent = "Digital Clock"
    }
});



