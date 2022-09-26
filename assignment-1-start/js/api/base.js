// replace your api key 
const API_KEY = "bedacfe1de749e877285f9631320be77"

// create getWeather function here
const getWeather = (cityName) => {
    return fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + API_KEY + "&units=metric")
        .then(response => response.json())
        .then(data => data)
}

// export the getWeather function
export {getWeather}