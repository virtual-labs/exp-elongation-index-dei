// STEP 2 

// const nextToStep2 = document.querySelector("#nextToStep2");

const step2 = document.querySelector("#step2");
const instructionsStep2 = document.querySelector("#instructionsStep2");

// images of step2
const png1Step2 = document.querySelector("#png1Step2");
const png2Step2 = document.querySelector("#png2Step2");
const png3Step2 = document.querySelector("#png3Step2");
const png4Step2 = document.querySelector("#png4Step2");

// gifs of step2
const gif1Step2 = document.querySelector("#gif1Step2");
const gif2Step2 = document.querySelector("#gif2Step2");
const gif3Step2 = document.querySelector("#gif3Step2");
const gif4Step2 = document.querySelector("#gif4Step2");
const gif5Step2 = document.querySelector("#gif5Step2");
const gif6Step2 = document.querySelector("#gif6Step2");

// arrows of step2
const arrNext = document.querySelector(".arr-next");
const arr1Step2 = document.querySelector("#arr1Step2");
const arr2Step2 = document.querySelector("#arr2Step2");
const arr3Step2 = document.querySelector("#arr3Step2");
const arr4Step2 = document.querySelector("#arr4Step2");
const arr5Step2 = document.querySelector("#arr5Step2");
const arr6Step2 = document.querySelector("#arr6Step2");
const arr7Step2 = document.querySelector("#arr7Step2");

// transboxes of step2
const trans1Step2 = document.querySelector("#trans1Step2");
const trans2Step2 = document.querySelector("#trans2Step2");
const trans3Step2 = document.querySelector("#trans3Step2");
const trans4Step2 = document.querySelector("#trans4Step2");
const trans5Step2 = document.querySelector("#trans5Step2");
const trans6Step2 = document.querySelector("#trans6Step2");

// buttons of step 2
const assemBtnStep2 = document.querySelector("#assembleStep2");
const nextToStep3 = document.querySelector("#nextToStep3");

addEventListener("DOMContentLoaded", (evt) => {
    step2.style.visibility = "visible";
    instructionsStep2.textContent = "Assemble the sieves in descending order with the largest aperture size sieve at the top and the smallest at the bottom. Place a pan below the bottom most sieve.";
    png1Step2.style.visibility = "visible";
    assemBtnStep2.style.visibility = "visible";
    arr1Step2.style.visibility = "visible";
});

assemBtnStep2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step2.style.visibility = "hidden";
    png1Step2.style.visibility = "hidden";

    gif1Step2.style.visibility = "visible";

    setTimeout(() => {
        instructionsStep2.textContent = "Pour the aggregates into the sieve stack."
        gif1Step2.style.visibility = "hidden";
        png2Step2.style.visibility = "visible";
        arr2Step2.style.visibility = "visible";
        trans1Step2.style.visibility = "visible";
    }, 13000);
});

trans1Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step2.style.visibility = "hidden";
    png2Step2.style.visibility = "hidden";

    gif2Step2.style.visibility = "visible";

    setTimeout(()=>{
        gif2Step2.style.visibility = "hidden";
        instructionsStep2.textContent = "Cover the sieve stack with the lid and place it on the sieve shaker. Start the sieve shaker and wait for sometime."
        png3Step2.style.visibility = "visible";
        arr3Step2.style.visibility = "visible";
        trans2Step2.style.visibility = "visible";
    }, 9000);
});

trans2Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step2.style.visibility = "hidden";
    png3Step2.style.visibility = "hidden";

    gif3Step2.style.visibility = "visible";

    setTimeout(() => {
        arr4Step2.style.visibility = "visible";
        trans3Step2.style.visibility = "visible";
    }, 2000);
});

trans3Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step2.style.visibility = "hidden";
    gif3Step2.style.visibility = "hidden";

    gif4Step2.style.visibility = "visible";

    setTimeout(() => {
        arr5Step2.style.visibility = "visible";
        trans4Step2.style.visibility = "visible";
    }, 5000);
});

trans4Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step2.style.visibility = "hidden";
    gif4Step2.style.visibility = "hidden";

    gif5Step2.style.visibility = "visible";

    setTimeout(() => {
        arr6Step2.style.visibility = "visible";
        trans5Step2.style.visibility = "visible";
    }, 10000);
});

trans5Step2.addEventListener("click", (evt) =>{
    evt.target.style.visibility = "hidden";
    arr6Step2.style.visibility = "hidden";
    gif5Step2.style.visibility = "hidden";

    gif6Step2.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep2.textContent = "Remove the sieves from the sieve shaker and note down the aggregates retained on each sieve.";
        arr7Step2.style.visibility = "visible";
        trans6Step2.style.visibility = "visible";
    }, 5000);
});

trans6Step2.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step2.style.visibility = "hidden";
    gif6Step2.style.visibility = "hidden"

    png4Step2.style.visibility = "visible";

    setTimeout(() => {
        nextToStep3.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 2000);
});

nextToStep3.addEventListener("click", (evt) => {
    window.location.href = "./step3.html";
});