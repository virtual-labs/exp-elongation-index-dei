// STEP 4

const step7 = document.querySelector("#step7");
const instructionsStep7 = document.querySelector("#instructionsStep7");

// images of step7
const png1Step7 = document.querySelector("#png1Step7");
const png2Step7 = document.querySelector("#png2Step7");

// gifs of step7
const gif1Step7 = document.querySelector("#gif1Step7");
const gif2Step7 = document.querySelector("#gif2Step7");
const gif3Step7 = document.querySelector("#gif3Step7");
const gif4Step7 = document.querySelector("#gif4Step7");
const gif5Step7 = document.querySelector("#gif5Step7");
const gif6Step7 = document.querySelector("#gif6Step7");
const gif7Step7 = document.querySelector("#gif7Step7");


// arrows of step7
const arrNext = document.querySelector(".arr-next");
const arr1Step7 = document.querySelector("#arr1Step7");
const arr2Step7 = document.querySelector("#arr2Step7");
const arr3Step7 = document.querySelector("#arr3Step7");
const arr4Step7 = document.querySelector("#arr4Step7");
const arr5Step7 = document.querySelector("#arr5Step7");
const arr6Step7 = document.querySelector("#arr6Step7");
const arr7Step7 = document.querySelector("#arr7Step7");

// transboxes of step7
const trans1Step7 = document.querySelector("#trans1Step7");
const trans2Step7 = document.querySelector("#trans2Step7");
const trans3Step7 = document.querySelector("#trans3Step7");
const trans4Step7 = document.querySelector("#trans4Step7");
const trans5Step7 = document.querySelector("#trans5Step7");
const trans6Step7 = document.querySelector("#trans6Step7");
const trans7Step7 = document.querySelector("#trans7Step7");

// next to step5
const nextToStep8 = document.querySelector("#nextToStep8");

addEventListener("DOMContentLoaded", (evt) => {
    step7.style.visibility = "visible";
    instructionsStep7.textContent = "Try passing the aggregates through the 20-16mm slot in the flakiness gauge. Separate the passing aggregates form the ones that have not passed."
    png1Step7.style.visibility = "visible";
    trans1Step7.style.visibility = "visible";
    arr1Step7.style.visibility = "visible";
});

trans1Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step7.style.visibility = "hidden";
    png1Step7.style.visibility = "hidden";

    gif1Step7.style.visibility = "visible";

    setTimeout(()=>{
        trans2Step7.style.visibility = "visible";
        arr2Step7.style.visibility = "visible";
    }, 6000);
});

trans2Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step7.style.visibility = "hidden";
    gif1Step7.style.visibility = "hidden";

    gif2Step7.style.visibility = "visible";

    setTimeout(()=>{
        trans3Step7.style.visibility = "visible";
        arr3Step7.style.visibility = "visible";
    }, 4500);
});

trans3Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step7.style.visibility = "hidden";
    gif2Step7.style.visibility = "hidden";

    gif3Step7.style.visibility = "visible";

    setTimeout(()=>{
        trans4Step7.style.visibility = "visible";
        arr4Step7.style.visibility = "visible";
    }, 6000);
});

trans4Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step7.style.visibility = "hidden";
    gif3Step7.style.visibility = "hidden";

    gif4Step7.style.visibility = "visible";

    setTimeout(()=>{
        trans5Step7.style.visibility = "visible";
        arr5Step7.style.visibility = "visible";
    }, 6000);
});

trans5Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step7.style.visibility = "hidden";
    gif4Step7.style.visibility = "hidden";

    gif5Step7.style.visibility = "visible";

    setTimeout(()=>{
        trans6Step7.style.visibility = "visible";
        arr6Step7.style.visibility = "visible";
    }, 4500);
});

trans6Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step7.style.visibility = "hidden";
    gif5Step7.style.visibility = "hidden";

    gif6Step7.style.visibility = "visible";

    
 
     setTimeout(() => {
         gif6Step7.style.visibility = "hidden";

         instructionsStep7.visibility = "Weigh the aggregates that have passed through the 20-16mm slot in flakiness gauge."
         png2Step7.style.visibility = "visible";
         trans7Step7.style.visibility = "visible";
         arr7Step7.style.visibility = "visible";
     }, 8500);
});


trans7Step7.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step7.style.visibility = "hidden";
    png2Step7.style.visibility = "hidden";

    gif7Step7.style.visibility = "visible";

    setTimeout(() => {
        nextToStep8.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});



nextToStep8.addEventListener("click", (evt) => {
    window.location.href = "./step8.html";
});

