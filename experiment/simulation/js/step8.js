// Step 8

const step8 = document.querySelector("#step8");
const instructionsStep8 = document.querySelector("#instructionsStep8");
const conclusion = document.querySelector("#conclusion");

// next button
const nextToPostTest = document.querySelector("#nextToPostTest");
const arrNext = document.querySelector(".arr-next");

// transboxes of step 8

const trans1Step8 = document.querySelector("#trans1Step8");
const trans2Step8 = document.querySelector("#trans2Step8");
const trans3Step8 = document.querySelector("#trans3Step8");
const trans4Step8 = document.querySelector("#trans4Step8");
const trans5Step8 = document.querySelector("#trans5Step8");
const trans6Step8 = document.querySelector("#trans6Step8");
const trans7Step8 = document.querySelector("#trans7Step8");
const trans8Step8 = document.querySelector("#trans8Step8");

// arrows of step 8
const arr1Step8 = document.querySelector("#arr1Step8");
const arr2Step8 = document.querySelector("#arr2Step8");
const arr3Step8 = document.querySelector("#arr3Step8");
const arr4Step8 = document.querySelector("#arr4Step8");
const arr5Step8 = document.querySelector("#arr5Step8");
const arr6Step8 = document.querySelector("#arr6Step8");
const arr7Step8 = document.querySelector("#arr7Step8");
const arr8Step8 = document.querySelector("#arr8Step8");

// images of step8
const png1Step8 = document.querySelector("#png1Step8");
const png2Step8 = document.querySelector("#png2Step8");
const png3Step8 = document.querySelector("#png3Step8");
const png4Step8 = document.querySelector("#png4Step8");
const png5Step8 = document.querySelector("#png5Step8");
const png6Step8 = document.querySelector("#png6Step8");
const png7Step8 = document.querySelector("#png7Step8");
const png8Step8 = document.querySelector("#png8Step8");
const png9Step8 = document.querySelector("#png9Step8");


addEventListener("DOMContentLoaded", (evt) =>{
    step8.style.visibility = "visible";
    instructionsStep8.textContent = "Result.";
    png1Step8.style.visibility = "visible";
    trans1Step8.style.visibility = "visible";
    arr1Step8.style.visibility = "visible";
});

trans1Step8.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step8.style.visibility = "hidden";
    png1Step8.style.visibility = "hidden";

    png2Step8.style.visibility = "visible";
    trans2Step8.style.visibility = "visible";
    arr2Step8.style.visibility = "visible";
});

trans2Step8.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step8.style.visibility = "hidden";
    png2Step8.style.visibility = "hidden";

    png3Step8.style.visibility = "visible";
    trans3Step8.style.visibility = "visible";
    arr3Step8.style.visibility = "visible";
});

trans3Step8.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step8.style.visibility = "hidden";
    png3Step8.style.visibility = "hidden";

    png4Step8.style.visibility = "visible";
    trans4Step8.style.visibility = "visible";
    arr4Step8.style.visibility = "visible";
});

trans4Step8.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step8.style.visibility = "hidden";
    png4Step8.style.visibility = "hidden";

    png5Step8.style.visibility = "visible";
    trans5Step8.style.visibility = "visible";
    arr5Step8.style.visibility = "visible";
});

trans5Step8.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step8.style.visibility = "hidden";
    png5Step8.style.visibility = "hidden";

    png6Step8.style.visibility = "visible";
    trans6Step8.style.visibility = "visible";
    arr6Step8.style.visibility = "visible";
});

trans6Step8.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr6Step8.style.visibility = "hidden";
    png6Step8.style.visibility = "hidden";

    png7Step8.style.visibility = "visible";
    trans7Step8.style.visibility = "visible";
    arr7Step8.style.visibility = "visible";
});

trans7Step8.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step8.style.visibility = "hidden";
    png7Step8.style.visibility = "hidden";

    png8Step8.style.visibility = "visible";
    trans8Step8.style.visibility = "visible";
    arr8Step8.style.visibility = "visible";
});

trans8Step8.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr8Step8.style.visibility = "hidden";
    png8Step8.style.visibility = "hidden";

    png9Step8.style.visibility = "visible";
    
    setTimeout(() => {
        conclusion.style.visibility = "visible";
    }, 1000);

    setTimeout(() => {
        arrNext.style.visibility = "visible";
        nextToPostTest.style.visibility = "visible";
    }, 5000);
});

nextToPostTest.addEventListener("click", (evt) => {
    window.location.href = "https://virtual-labs.github.io/exp-elongation-index-dei/posttest.html";
});