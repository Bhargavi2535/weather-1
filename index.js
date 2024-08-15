document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '6b8f70ed9895072fd9c8c1c5e20cb9e4'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }
            const cityName = data.name;
            const temperature = `${data.main.temp}°C`;
            const description = data.weather[0].description;

            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
        })
        .catch(error => console.error('Error:', error));
});