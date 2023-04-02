const API_KEY = `9cdb7e7734c0b7c196ee77b2ace89e29`;

const loadTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const setInnerText = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

const displayTemp = (data) => {
    console.log(data);
    setInnerText('temperature', data.main['temp']);
    setInnerText('feel', data.main['feels_like']);
    setInnerText('condition', data.weather[0].main);
    setInnerText('humidity',data.main.humidity);
    setInnerText('wind',data.wind.speed);
    // const temp = document.getElementById('temperature').innerText = data.main['temp'];

}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})
loadTemperature('dhaka');