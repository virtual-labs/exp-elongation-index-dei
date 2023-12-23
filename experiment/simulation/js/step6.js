// STEP 4

const step6 = document.querySelector("#step6");
const instructionsStep6 = document.querySelector("#instructionsStep6");

// images of step6
const png1Step6 = document.querySelector("#png1Step6");
const png2Step6 = document.querySelector("#png2Step6");

// gifs of step6
const gif1Step6 = document.querySelector("#gif1Step6");
const gif2Step6 = document.querySelector("#gif2Step6");
const gif3Step6 = document.querySelector("#gif3Step6");
const gif4Step6 = document.querySelector("#gif4Step6");
const gif5Step6 = document.querySelector("#gif5Step6");
const gif6Step6 = document.querySelector("#gif6Step6");
const gif7Step6 = document.querySelector("#gif7Step6");


// arrows of step6
const arrNext = document.querySelector(".arr-next");
const arr1Step6 = document.querySelector("#arr1Step6");
const arr2Step6 = document.querySelector("#arr2Step6");
const arr3Step6 = document.querySelector("#arr3Step6");
const arr4Step6 = document.querySelector("#arr4Step6");
const arr5Step6 = document.querySelector("#arr5Step6");
const arr6Step6 = document.querySelector("#arr6Step6");
const arr7Step6 = document.querySelector("#arr7Step6");

// transboxes of step6
const trans1Step6 = document.querySelector("#trans1Step6");
const trans2Step6 = document.querySelector("#trans2Step6");
const trans3Step6 = document.querySelector("#trans3Step6");
const trans4Step6 = document.querySelector("#trans4Step6");
const trans5Step6 = document.querySelector("#trans5Step6");
const trans6Step6 = document.querySelector("#trans6Step6");
const trans7Step6 = document.querySelector("#trans7Step6");

// next to step5
const nextToStep7 = document.querySelector("#nextToStep7");

addEventListener("DOMContentLoaded", (evt) => {
    step6.style.visibility = "visible";
    instructionsStep6.textContent = "Now, pass the aggregates through  12.5-10mm slot and separate the passing aggregates from the ones that have not passed the slot."
    png1Step6.style.visibility = "visible";
    trans1Step6.style.visibility = "visible";
    arr1Step6.style.visibility = "visible";
});

trans1Step6.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step6.style.visibility = "hidden";
    png1Step6.style.visibility = "hidden";

    gif1Step6.style.visibility = "visible";

    setTimeout(()=>{
        trans2Step6.style.visibility = "visible";
        arr2Step6.style.visibility = "visible";
    }, 6000);
});

trans2Step6.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step6.style.visibility = "hidden";
    gif1Step6.style.visibility = "hidden";

    gif2Step6.style.visibility = "visible";

    setTimeout(()=>{
        trans3Step6.style.visibility = "visible";
        arr3Step6.style.visibility = "visible";
    }, 4500);
});

trans3Step6.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step6.style.visibility = "hidden";
    gif2Step6.style.visibility = "hidden";

    gif3Step6.style.visibility = "visible";

    setTimeout(()=>{
        trans4Step6.style.visibility = "visible";
        arr4Step6.style.visibility = "visible";
    }, 6000);
});

trans4Step6.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step6.style.visibility = "hidden";
    gif3Step6.style.visibility = "hidden";

    gif4Step6.style.visibility = "visible";

    setTimeout(()=>{
        trans5Step6.style.visibility = "visible";
        arr5Step6.style.visibility = "visible";
    }, 6000);
});

trans5Step6.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step6.style.visibility = "hidden";
    gif4Step6.style.visibility = "hidden";

    gif5Step6.style.visibility = "visible";

    setTimeout(()=>{
        trans6Step6.style.visibility = "visible";
        arr6Step6.style.visibility = "visible";
    }, 4500);
});

trans6Step6.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step6.style.visibility = "hidden";
    gif5Step6.style.visibility = "hidden";

    gif6Step6.style.visibility = "visible";

    
 
     setTimeout(() => {
         gif6Step6.style.visibility = "hidden";

         instructionsStep6.visibility = "Weigh the aggregates passing the 12.5-10mm slot on the elongation gauge."
         png2Step6.style.visibility = "visible";
         trans7Step6.style.visibility = "visible";
         arr7Step6.style.visibility = "visible";
     }, 8500);
});


trans7Step6.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step6.style.visibility = "hidden";
    png2Step6.style.visibility = "hidden";

    gif7Step6.style.visibility = "visible";

    setTimeout(() => {
        nextToStep7.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});



nextToStep7.addEventListener("click", (evt) => {
    window.location.href = "./step7.html";
});

