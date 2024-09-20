// Current year in the footer//
const currentYear = new Date().getFullYear();

const currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;

//Displays the last modified//
const lastModified = document.lastModified;
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modified ${lastModified}`;