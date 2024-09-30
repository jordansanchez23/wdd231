/*********Current Year **********/
const currentYear = new Date().getFullYear();

const currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;

/************Last Modified************/
const lastModified = document.lastModified;
const lastModifiedElement =document.getElementById("lastModified");
lastModifiedElement.textContent = `${lastModified}`;

/**********Menu**************/
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});