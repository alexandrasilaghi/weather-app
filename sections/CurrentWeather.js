function displayCurrentWeather(city){
    const defaultCityWeatherUrl = getCurrentWeatherDataUrl(city);

fetch(defaultCityWeatherUrl)
.then((response) => response.json())
.then((data) => {
    
 const {name, main, weather, wind, dt } = data;

 const currentDayofTheWeek = getDayOfTheWeek(dt);
 const currentTime = getTime(dt);

 const temperature = Math.round(main.temp);
 const realFeel = Math.round(main.feels_like);

 const windSpeedInKmPerHour = windToKmPerHour(wind.speed);
 const windSpeed = Math.round(windSpeedInKmPerHour);

 const description = weather[0].description;
 const weatherIcon = getWeatherIcon(weather[0].icon);



 populateDataInDOM(currentDayofTheWeek, currentTime, temperature, realFeel, windSpeedInKmPerHour, windSpeed, description, weatherIcon, name)


//  weatherContainer.innerHTML = ``;
});  

function populateDataInDOM(currentDayofTheWeek, currentTime, temperature, realFeel, windSpeedInKmPerHour, windSpeed, description, weatherIcon, name){
    let weatherContainer = document.querySelector('.current-weather');
 
    let cityElement = document.querySelector(".city");
    cityElement.innerText = name;
   
    let dayTimeContainerElement = document.querySelector(".day-time-container");
    dayTimeContainerElement.innerHTML = `<strong>${currentDayofTheWeek}</strong>, ${currentTime}`;
   
    let temperatureElement = document.querySelector(".temperature");
    temperatureElement.innerText = `${temperature}°C`;
   
    let weatherIconElement = document.querySelector(".weather-icon");
    weatherIconElement.attributes['src'].value = weatherIcon;

    let realFeelElement = document.querySelector('.real-feel');
    realFeelElement.innerText = `${realFeel}°C`;

    let descriptionElement = document.querySelector('.description');
    descriptionElement.innerText = description;

    let windElement = document.querySelector('.wind');
    windElement.innerText = `${windSpeed}km/h`;

}


}
