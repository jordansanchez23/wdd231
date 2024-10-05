const spotlightContainer = document.querySelector(".spotlights");

const directory = "data/directory.json";

async function getCards() {
    const response = await fetch(directory);
    const data = await response.json()
    if (!data.directory) {
        throw Error (await response.text());
    }

    const premiumMembers = data.directory.filter(member => member.membership >1);
    const randomMembers = premiumMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    spotlightContainer.innerHTML = "";

    randomMembers.forEach((member) => {
        const card = membershipCard(member); 
        spotlightContainer.appendChild(card); 
    });

}

const typeMember = (number) => {
    if (number == 1) {
        return "Regular Member";
    } else if (number == 2) {
        return "Silver Member";
    } else if (number == 3) {
        return "Gold Member";
    } else {
        return "Unknown Member";
    }
}

const membershipCard = (member) => {
    // Creating elements to add to the div.cards elements
    let card = document.createElement("section");
    card.classList.add("premium-card");

    let company = document.createElement("h2");
    company.textContent = member.name;

    let phone = document.createElement("p");
    phone.textContent = `Phone: ${member.phone}`;

    let url = document.createElement("a");
    url.href = member.url;
    url.textContent = "Visit Website";

    let email = document.createElement("p");
    email.textContent = `Email: ${member.email}`;

    // Create an image container
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create the image element
    let image = document.createElement("img");
    // Set attributes for the image
    image.setAttribute("src", member.image);
    image.setAttribute("alt", `Image of ${member.addressname} company`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "100");
    image.setAttribute("height", "100");

    // Append the image to the image container
    imageContainer.appendChild(image);

    let membership = document.createElement("h3");
    membership.textContent = typeMember(member.membership);

    // Append all elements to the card
    card.appendChild(company);
    card.appendChild(membership);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(url);
    card.appendChild(imageContainer); // Append the image container

    return card;
}

getCards();


