// mainStep
const startBtn = document.querySelector("#nextToStep1");
const mainStep = document.querySelector("#mainStep");

// STEP 1 

const step1 = document.querySelector("#step1");
const instructionsStep1 = document.querySelector("#instructionsStep1");

// images of step1
const png1Step1 = document.querySelector("#png1Step1");
const png2Step1 = document.querySelector("#png2Step1");

// gifs of step1
const gif1Step1 = document.querySelector("#gif1Step1");
const gif2Step1 = document.querySelector("#gif2Step1");
const gif3Step1 = document.querySelector("#gif3Step1");
const gif4Step1 = document.querySelector("#gif4Step1");
const gif5Step1 = document.querySelector("#gif5Step1");
const gif6Step1 = document.querySelector("#gif6Step1");

// arrows of step1
const arr1Step1 = document.querySelector("#arr1Step1");
const arr2Step1 = document.querySelector("#arr2Step1");
const arr3Step1 = document.querySelector("#arr3Step1");
const arr4Step1 = document.querySelector("#arr4Step1");

// transboxes of step1
const trans1Step1 = document.querySelector("#trans1Step1");
const trans2Step1 = document.querySelector("#trans2Step1");
const trans3Step1 = document.querySelector("#trans3Step1");
const trans4Step1 = document.querySelector("#trans4Step1");

// next to step2
const nextToStep2 = document.querySelector("#nextToStep2")
const arrNext = document.querySelector(".arr-next");

//#########################################################################

addEventListener("DOMContentLoaded", (evt) => {
    startBtn.style.visibility = "visible";
});

// step1 

startBtn.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    mainStep.style.visibility = "hidden";

    step1.style.visibility = "visible";
    png1Step1.style.visibility = "visible";
    arr1Step1.style.visibility = "visible";
    trans1Step1.style.visibility = "visible";
    instructionsStep1.innerText = "Place the tray on the weighing balance. Press the TARE button and then measure the weight of the coarse aggregate sample.";
});

trans1Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    png1Step1.style.visibility = "hidden";

    gif1Step1.style.visibility = "visible";

    setTimeout(()=>{
        arr2Step1.style.visibility = "visible";
        trans2Step1.style.visibility = "visible";
    }, 2000);
});

trans2Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step1.style.visibility = "hidden";
    gif1Step1.style.visibility = "hidden";

    gif2Step1.style.visibility = "visible";
    
    setTimeout(()=>{
        gif2Step1.style.visibility = "hidden";

        arr3Step1.style.visibility = "visible";
        trans3Step1.style.visibility = "visible";
        png2Step1.style.visibility = "visible";
    }, 2000);
});

trans3Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step1.style.visibility = "hidden";
    png2Step1.style.visibility = "hidden";

    gif3Step1.style.visibility = "visible";

    setTimeout(()=>{
        nextToStep2.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});

nextToStep2.addEventListener("click", (evt) => {
    window.location.href = "./steps-files/step2.html";
})
