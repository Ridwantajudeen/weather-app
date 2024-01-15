const apiKey = '7905ea6fcf9b4f67bcf193536240801'; // Replace this with your actual API key
const apiUrl = 'https://api.weatherapi.com/v1/current.json'; // Updated API URL

async function getWeather(city) {
    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}`);
    const data = await response.json();
    return data;
}

function updateWeatherUI(data) {
    const temperature = data.current.temp_c;
    const city = data.location.name;
    const conditions = data.current.condition.text;
    var currentTime = new Date();
    var hour = currentTime.getHours().toString().padStart(2,0);
    var minutes = currentTime.getMinutes().toString().padStart(2,0);


    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `<div id="info"> <p id="temp" >Temperature: ${temperature} °C</p>
                             <p id="city" >City: ${city}</p>
                             <p id="cond" >Conditions: ${conditions}</p> 
                             <p id="times" >Your Local Time: ${hour}:${minutes}</p> </div>`;
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const cityInput = document.getElementById('city-input').value;
    const weatherData = await getWeather(cityInput);
    updateWeatherUI(weatherData);
});

  const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();