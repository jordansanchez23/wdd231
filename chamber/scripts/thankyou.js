const currentUrl = window.decodeURI(window.location.href);

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const orgTitle = document.querySelector("#orgTitle");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const businessName = document.querySelector("#businessName");
const membershipLevel = document.querySelector("#membershipLevel");
const description = document.querySelector("#description");
const timeStamp = document.querySelector("#timeStamp");

splitInfo = currentUrl.replaceAll('+',' ').replaceAll('%2B', '+').replaceAll('%40','@').split('?')[1].split('&');

let formInfo = {};

splitInfo.forEach(element => {
    const splitElement = element.split("=");
    formInfo[splitElement[0]] = splitElement[1];
});

console.log(formInfo);
membershipLevel.textContent = formInfo.membershipLevel;
firstName.textContent = formInfo.firstName;
lastName.textContent = formInfo.lastName;
orgTitle.textContent = formInfo.orgTitle;
email.textContent = formInfo.email;
phoneNumber.textContent = formInfo.phoneNumber;
businessName.textContent = formInfo.businessName;
description.textContent = formInfo.description;
timeStamp.textContent = formInfo.timeStamp;