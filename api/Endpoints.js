var API_KEY = 'e96773c3c05170c14a2b6282c60ac094';
var language = 'ro';
function getCurrentWeatherDataUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}

function getForecastEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`
}
