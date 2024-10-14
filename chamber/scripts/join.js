const goldModal = document.querySelector("#goldModal");
const silverModal = document.querySelector("#silverModal");
const bronzeModal = document.querySelector("#bronzeModal");
const nonprofitModal = document.querySelector("#nonProfitModal");

const goldCard = document.querySelector("#goldCard");
const silverCard = document.querySelector("#silverCard");
const bronzeCard = document.querySelector("#bronzeCard");
const nonProfitCard = document.querySelector("#nonProfitCard");

const timeStamp = document.querySelector("#timeStamp")

goldCard.addEventListener("click", () => {
    goldModal.showModal();
});

silverCard.addEventListener("click", () => {
    silverModal.showModal();
});

bronzeCard.addEventListener("click", () => {
    bronzeModal.showModal();
})

nonProfitCard.addEventListener("click", () => {
    nonprofitModal.showModal();
})

goldModal.addEventListener("click", () => {
    goldModal.close();
});

silverModal.addEventListener("click", () => {
    silverModal.close();
});

bronzeModal.addEventListener("click", () => {
    bronzeModal.close();
});

nonprofitModal.addEventListener("click", () => {
    nonprofitModal.close();
})

//To retrieve the date from the time Stamp//

function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){dd="0"+dd} if(mm<10){mm="0"+mm}
    today = `${mm}-${dd}-${yyyy}`;

    document.getElementById("timeStamp").value = today;
}

getDate();