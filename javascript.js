const apiKey = 'd13b349e865bf09425cf97b3674b76b4';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let inputEl = document.querySelector('#input');
let buttonEl = document.querySelector('#button');
let weatherIconEl = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

    // console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

}

if (data.weather[0].main == 'Clouds') {
    weatherIconEl.src = 'images/clouds.png';
} else if (data.weather[0].main == 'Clear') {
    weatherIconEl.src = 'images/clear.png';
} else if (data.weather[0].main == 'Rain') {
    weatherIconEl.src = 'images/rain.png';
} else if (data.weather[0].main == 'Drizzle') {
    weatherIconEl.src = 'images/drizzle.png';
} else if (data.weather[0].main == 'Mist') {
    weatherIconEl.src = 'images/mist.png';
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";


 }


    
inputEl.addEventListener('click', ()=> {
    checkWeather(inputEl.value);
});

checkWeather();