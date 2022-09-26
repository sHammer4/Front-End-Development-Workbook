// replace your api key 
const API_KEY = "bedacfe1de749e877285f9631320be77"

// create getWeather function here
const getWeather = (cityName) => {
    //http://api.openweathermap.org/geo/1.0/direct?q=Tokyo&limit=1&appid=bedacfe1de749e877285f9631320be77
    return fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + API_KEY)
        .then((response) => response.json())
        .then((data) => {
            cityData = data[0]
            //If nothing entered, will return error code + message
            //If city found, will take coordinates from original fetch and fetch again for temperature data
            if(cityData != null) {
                return fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + cityData.lat + "&lon=" + cityData.lon + "&appid=" + API_KEY + "&units=metric")
                    .then((reponse) => reponse.json())
                    .then((data) => {
                        return data
                })
            }
            return data
        })
}

// export the getWeather function
export {getWeather}