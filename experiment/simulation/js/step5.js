// STEP 3

const step5 = document.querySelector("#step5");
const instructionsStep5 = document.querySelector("#instructionsStep5");

// images of step5
const png1Step5 = document.querySelector("#png1Step5");
const png2Step5 = document.querySelector("#png2Step5");

// gifs of step5
const gif1Step5 = document.querySelector("#gif1Step5");
const gif2Step5 = document.querySelector("#gif2Step5");
const gif3Step5 = document.querySelector("#gif3Step5");
const gif4Step5 = document.querySelector("#gif4Step5");
const gif5Step5 = document.querySelector("#gif5Step5");
const gif6Step5 = document.querySelector("#gif6Step5");
const gif7Step5 = document.querySelector("#gif7Step5");
const gif8Step5 = document.querySelector("#gif8Step5");
const gif9Step5 = document.querySelector("#gif9Step5");



// arrows of step5
const arrNext = document.querySelector(".arr-next");
const arr1Step5 = document.querySelector("#arr1Step5");
const arr2Step5 = document.querySelector("#arr2Step5");
const arr3Step5 = document.querySelector("#arr3Step5");
const arr4Step5 = document.querySelector("#arr4Step5");
const arr5Step5 = document.querySelector("#arr5Step5");
const arr6Step5 = document.querySelector("#arr6Step5");
const arr7Step5 = document.querySelector("#arr7Step5");
const arr8Step5 = document.querySelector("#arr8Step5");
const arr9Step5 = document.querySelector("#arr9Step5");
const arr10Step5 = document.querySelector("#arr9Step5");


// transboxes of step5
const trans1Step5 = document.querySelector("#trans1Step5");
const trans2Step5 = document.querySelector("#trans2Step5");
const trans3Step5 = document.querySelector("#trans3Step5");
const trans4Step5 = document.querySelector("#trans4Step5");
const trans5Step5 = document.querySelector("#trans5Step5");
const trans6Step5 = document.querySelector("#trans6Step5");
const trans7Step5 = document.querySelector("#trans7Step5");
const trans8Step5 = document.querySelector("#trans8Step5");
const trans9Step5 = document.querySelector("#trans9Step5");
const trans10Step5 = document.querySelector("#trans9Step5");




// next to step5
const nextToStep6 = document.querySelector("#nextToStep6");

addEventListener("DOMContentLoaded", (evt) => {
    step5.style.visibility = "visible";
    instructionsStep5.textContent = "Again pass the aggregates that have retained on 12.5 mm sieve one by one through the 16-12.5mm slot in elongation gauge. Separate the aggregates that have passed from the ones that have not passed the elongation gauge."
    png1Step5.style.visibility = "visible";
    arr1Step5.style.visibility = "visible";
    trans1Step5.style.visibility = "visible";
});

trans1Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step5.style.visibility = "hidden";
    arr1Step5.style.visibility = "hidden";

    gif1Step5.style.visibility = "visible";

    setTimeout(() => {
        trans2Step5.style.visibility = "visible";
        arr2Step5.style.visibility = "visible";
    }, 6000);
});

trans2Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step5.style.visibility = "hidden";
    gif1Step5.style.visibility = "hidden";

    gif2Step5.style.visibility = "visible";

    setTimeout(() => {
        trans3Step5.style.visibility = "visible";
        arr3Step5.style.visibility = "visible";
    }, 6000);
});

trans3Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step5.style.visibility = "hidden";
    gif2Step5.style.visibility = "hidden";

    gif3Step5.style.visibility = "visible";

    setTimeout(() => {
        trans4Step5.style.visibility = "visible";
        arr4Step5.style.visibility = "visible";
    }, 6000);
});

trans4Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step5.style.visibility = "hidden";
    gif3Step5.style.visibility = "hidden";

    gif4Step5.style.visibility = "visible";

    setTimeout(() => {
        trans5Step5.style.visibility = "visible";
        arr5Step5.style.visibility = "visible";
    }, 6000);
});

trans5Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step5.style.visibility = "hidden";
    gif4Step5.style.visibility = "hidden";

    gif5Step5.style.visibility = "visible";

    setTimeout(() => {
        trans6Step5.style.visibility = "visible";
        arr6Step5.style.visibility = "visible";
    }, 6000);
});

trans6Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step5.style.visibility = "hidden";
    gif5Step5.style.visibility = "hidden";

    gif6Step5.style.visibility = "visible";

    setTimeout(() => {
        trans7Step5.style.visibility = "visible";
        arr7Step5.style.visibility = "visible";
    }, 6000);
});

trans7Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step5.style.visibility = "hidden";
    gif6Step5.style.visibility = "hidden";

    gif7Step5.style.visibility = "visible";

    setTimeout(() => {
        trans8Step5.style.visibility = "visible";
        arr8Step5.style.visibility = "visible";
    }, 6000);
});

trans8Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr8Step5.style.visibility = "hidden";
    gif7Step5.style.visibility = "hidden";

    gif8Step5.style.visibility = "visible";

    setTimeout(() => {
        instructionsStep5.textContent = "Weigh the aggregates that have passed through the 16-12.5mm slot on the elongation gauge."
        gif8Step5.style.visibility = "hidden";
        trans9Step5.style.visibility = "visible";
        arr9Step5.style.visibility = "visible";
        png2Step5.style.visibility = "visible";
    }, 10000);
});

trans9Step5.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr9Step5.style.visibility = "hidden";
    gif8Step5.style.visibility = "hidden";

    gif9Step5.style.visibility = "visible";

    setTimeout(()=>{
         nextToStep6.style.visibility = "visible";
         arrNext.style.visibility = "visible"; 
         
     }, 3000);
});

nextToStep6.addEventListener("click", (evt) => {
    window.location.href = "./step6.html";
});









