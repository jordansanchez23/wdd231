const currentUrl = window.location.href
//console.log(currentUrl);

//Divide the url into two halves
const everything = currentUrl.split('?');
//console.log(everything);

//Grab just the second half
let formData = everything[1].split("&");
//console.log(formData);

//Break the form name value pairs into an array
//formData = formData.split("&");
//console.log(formData);

function show(cup) {
    //console.log(cup);
    formData.forEach(element => {
        //console.log(element)
        if (element.startsWith(cup)) {
            //console.log("Found a Match")
            result = element.split("=")[1].replace("%40", "@").replace("+", "")
            //result = result.replace("%40", "@")

            // end if
        }
    })
    return(result)
} // end show

const email = show("email");

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} temple</p>
<p>Your Phone: ${show("phone")}</p>
<p>Your Email: <a href=mailto:${email}">${email}</a></p>
`;
