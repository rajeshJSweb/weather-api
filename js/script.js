const API_KEY = `fe722594114100b725016f2c4a36cc57`

const searchWeather = () => {
    const searchInput = document.getElementById('search-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => loadWeather(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const loadWeather = temparetur => {
    setInnerText('cityName', temparetur.name);
    setInnerText('temperature', temparetur.main.temp);
    setInnerText('weather', temparetur.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${temparetur.weather[0].icon}@2x.png`
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src',url)

}