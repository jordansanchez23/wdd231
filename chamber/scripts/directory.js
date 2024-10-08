//Display between grid or list //
const listDisplay = document.querySelector("#grid-list");
const cardsArea = document.querySelector("#cards-area");

listDisplay.addEventListener("click", () => {
    cardsArea.classList.toggle("list");
});

const directory = "data/directory.json";
const membersCards = document.querySelector(".members-cards");

async function getMemberData() {
    const response = await fetch(directory);
    const data = await response.json();
    displayDirectory(data.directory)
}

const displayDirectory = (directory) => {
    membersCards.innerHTML = "";
    directory.forEach((member) => {
        //Creating elements to add the div.cards elements//
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let email = document.createElement("p");
        let image = document.createElement("img");
        let membership = document.createElement("p");
        membership.classList.add("membership");
        if (member.membership == 1) {
            membership.textContent = "Member";
        }
        if (member.membership == 2) {
            membership.classList.add("silver");
            membership.textContent = "Silver Member";
        }
        if (member.membership == 3) {
            membership.classList.add("gold");
            membership.textContent = "Gold Member";
        }

        let fund_year = document.createElement("p");

        //Adding the content//
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = `Phone: ${member.phone}`;
        email.textContent = `Email: ${member.email}`;
        fund_year.textContent = `Fund year: ${member.fund_year}`;
        url.href = member.url;
        url.textContent = "Visit Website";

        //Attributes for the images//
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `Image of ${member.addressname} company`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "340");
        image.setAttribute("height", "440");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(fund_year);
        card.appendChild(url);
        card.appendChild(membership);

        membersCards.appendChild(card);



    });
};

getMemberData();