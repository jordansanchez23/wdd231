//Valid URL String//
const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=33.18&lon=-117.24&units=imperial&appid=4d4ad70f8e9b0f1d0300f1c0686afb24";

async function apiFetch() {
    try{
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //just testing//
            displayData(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayData(data) {
    let weatherCard = document.getElementById("weather-card");
    weatherCard.innerHTML = "";

    let card = document.createElement("section");

    let title = document.createElement("h2");
    title.textContent = `Current Weather`;

    let currentTemp = document.createElement("p");
    currentTemp.textContent = `${data.main.temp}°F`;

    let description = document.createElement("p");
    description.textContent = data.weather[0].description;

    let highTemp = document.createElement("p");
    highTemp.textContent = `High: ${data.main.temp_max}°F`;

    let minTemp = document.createElement("p");
    minTemp.textContent = `Low: ${data.main.temp_min}°F`;

    let humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    let sunrise = new Date(data.sys.sunrise * 1000); //Converting to miliseconds//
    let sunriseTime = sunrise.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true});
    let sunriseElement = document.createElement("p");
    sunriseElement.textContent = `Sunrise: ${sunriseTime}`;

    let sunset = new Date(data.sys.sunset * 1000);
    let sunsetTime = sunset.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true});
    let sunsetElement = document.createElement("p");
    sunsetElement.textContent = `Sunset: ${sunsetTime}`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    
    card.appendChild(title);
    card.appendChild(weatherIcon);
    card.appendChild(currentTemp);
    card.appendChild(description);
    card.appendChild(highTemp);
    card.appendChild(minTemp);
    card.appendChild(humidity);
    card.appendChild(sunriseElement);
    card.appendChild(sunsetElement);

    weatherCard.appendChild(card);

}

apiFetch();




