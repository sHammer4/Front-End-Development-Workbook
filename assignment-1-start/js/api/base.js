// replace your api key 
const API_KEY = "YOUR API KEY"

// create getWeather function here
const getWeather = (cityName) => {
    return fetch(API_KEY)
        .then((response) => response.json())
        .then((promise) => {
            return promise
        })
}

// export the getWeather function
export {getWeather}