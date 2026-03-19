// STEP 4

const step4 = document.querySelector("#step4");
const instructionsStep4 = document.querySelector("#instructionsStep4");

// images of step4
const png1Step4 = document.querySelector("#png1Step4");
const png2Step4 = document.querySelector("#png2Step4");

// gifs of step4
const gif1Step4 = document.querySelector("#gif1Step4");
const gif2Step4 = document.querySelector("#gif2Step4");
const gif3Step4 = document.querySelector("#gif3Step4");
const gif4Step4 = document.querySelector("#gif4Step4");
const gif5Step4 = document.querySelector("#gif5Step4");
const gif6Step4 = document.querySelector("#gif6Step4");
const gif7Step4 = document.querySelector("#gif7Step4");


// arrows of step4
const arrNext = document.querySelector(".arr-next");
const arr1Step4 = document.querySelector("#arr1Step4");
const arr2Step4 = document.querySelector("#arr2Step4");
const arr3Step4 = document.querySelector("#arr3Step4");
const arr4Step4 = document.querySelector("#arr4Step4");
const arr5Step4 = document.querySelector("#arr5Step4");
const arr6Step4 = document.querySelector("#arr6Step4");
const arr7Step4 = document.querySelector("#arr7Step4");

// transboxes of step4
const trans1Step4 = document.querySelector("#trans1Step4");
const trans2Step4 = document.querySelector("#trans2Step4");
const trans3Step4 = document.querySelector("#trans3Step4");
const trans4Step4 = document.querySelector("#trans4Step4");
const trans5Step4 = document.querySelector("#trans5Step4");
const trans6Step4 = document.querySelector("#trans6Step4");
const trans7Step4 = document.querySelector("#trans7Step4");

// next to step5
const nextToStep5 = document.querySelector("#nextToStep5");

addEventListener("DOMContentLoaded", (evt) => {
    step4.style.visibility = "visible";
    instructionsStep4.textContent = "Try passing the aggregates through the 20-16mm slot in the elongation gauge. Separate the passing aggregates form the ones that have not passed."
    png1Step4.style.visibility = "visible";
    trans1Step4.style.visibility = "visible";
    arr1Step4.style.visibility = "visible";
});

trans1Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step4.style.visibility = "hidden";
    png1Step4.style.visibility = "hidden";

    gif1Step4.style.visibility = "visible";

    setTimeout(()=>{
        trans2Step4.style.visibility = "visible";
        arr2Step4.style.visibility = "visible";
    }, 6000);
});

trans2Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step4.style.visibility = "hidden";
    gif1Step4.style.visibility = "hidden";

    gif2Step4.style.visibility = "visible";

    setTimeout(()=>{
        trans3Step4.style.visibility = "visible";
        arr3Step4.style.visibility = "visible";
    }, 4500);
});

trans3Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step4.style.visibility = "hidden";
    gif2Step4.style.visibility = "hidden";

    gif3Step4.style.visibility = "visible";

    setTimeout(()=>{
        trans4Step4.style.visibility = "visible";
        arr4Step4.style.visibility = "visible";
    }, 6000);
});

trans4Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step4.style.visibility = "hidden";
    gif3Step4.style.visibility = "hidden";

    gif4Step4.style.visibility = "visible";

    setTimeout(()=>{
        trans5Step4.style.visibility = "visible";
        arr5Step4.style.visibility = "visible";
    }, 6000);
});

trans5Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step4.style.visibility = "hidden";
    gif4Step4.style.visibility = "hidden";

    gif5Step4.style.visibility = "visible";

    setTimeout(()=>{
        trans6Step4.style.visibility = "visible";
        arr6Step4.style.visibility = "visible";
    }, 4500);
});

trans6Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step4.style.visibility = "hidden";
    gif5Step4.style.visibility = "hidden";

    gif6Step4.style.visibility = "visible";

    
 
     setTimeout(() => {
         gif6Step4.style.visibility = "hidden";

         
         png2Step4.style.visibility = "visible";
         instructionsStep4.textContent = "Weigh the aggregates that have passed through the 20-16mm slot on the elongation gauge."
         trans7Step4.style.visibility = "visible";
         arr7Step4.style.visibility = "visible";
     }, 8500);
});


trans7Step4.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step4.style.visibility = "hidden";
    png2Step4.style.visibility = "hidden";

    gif7Step4.style.visibility = "visible";

    setTimeout(() => {
        nextToStep5.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 3000);
});



nextToStep5.addEventListener("click", (evt) => {
    window.location.href = "./step5.html";
});


