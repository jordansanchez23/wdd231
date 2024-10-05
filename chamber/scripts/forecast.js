// Valid URL String
const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=33.18&lon=-117.24&units=imperial&appid=4d4ad70f8e9b0f1d0300f1c0686afb24";

async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // just testing
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayData(data) {
    let forecastCard = document.getElementById("forecast-card");
    forecastCard.innerHTML = ""; 

    
    let name = document.createElement("h2");
    name.textContent = `Weather Forecast`;
    forecastCard.appendChild(name); 

    const today = new Date(); 
    const days = [0, 1, 2]; 

    days.forEach((i) => {
        const forecastDate = new Date();
        forecastDate.setDate(today.getDate() + i);
        const forecastDay = forecastDate.toISOString().split("T")[0];

        const forecastEntry = data.list.filter(entry => entry.dt_txt.startsWith(forecastDay));

        if (forecastEntry.length > 0) {
            
            const selectedEntry = forecastEntry.sort((a, b) => new Date(a.dt_txt) - new Date(b.dt_txt))[0];

            let card = document.createElement("p");
            let title = document.createElement("p");
            title.textContent = `${forecastDate.toLocaleDateString([], { weekday: 'long' })}: ${selectedEntry.main.temp}°F`;
            
            card.appendChild(title);
            forecastCard.appendChild(card); 
        }
    });
}

apiFetchForecast();