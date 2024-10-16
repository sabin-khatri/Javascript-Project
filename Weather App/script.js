
const apiKey = 'cdd7176a047c94a0c3436198b8cd1e05'; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#city-search");
const searchBtn = document.querySelector("#city-search-btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status === 404){
    document.querySelector(".error-message").style.display = "block";
    document.querySelector(".weather-info").style.display = "none";
    return;
}

const data = await response.json();

document.querySelector(".city-name").innerHTML = data.name;
document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
document.querySelector(".wind-speed").innerHTML = data.wind.speed + "Km/h";

switch (data.weather[0].main) {
    case "Clouds":
        weatherIcon.src = "image/clouds.png";
        break;
    case "Clear":
        weatherIcon.src = "image/sun.png";
        break;
    case "Rain":
        weatherIcon.src = "image/drizzle.png";
        break;
    case "Mist":
        weatherIcon.src = "image/mist.png";
        break;
     
    default:
        weatherIcon.src = "image/default.png"; 
}

document.querySelector(".weather-info").style.display = "block";
document.querySelector(".error-message").style.display = "none";
}

searchBtn.addEventListener("click", () => {
checkWeather(searchBox.value);
});