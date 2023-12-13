const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

function searchWeather() {
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    } else {
        alert('Please enter a country to search for weather.');
    }
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    const weatherIcon = document.getElementById('weatherIcon');

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    weatherInfoDiv.innerHTML = `
        <p>Temperature: ${temperature} °C</p>
        <p>Description: ${description}</p>
    `;

    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}.png`;
}
