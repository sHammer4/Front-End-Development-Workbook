// Include your assignment 1 below.
// Read the PDF for instruction on what to do.
// Ensure that you look at the "Marking Key" section of the PDF
// to not lose any marks.
import { getWeather } from "./api/base";
import { renderWeather } from "./dom/weather";

let weatherForm = document.querySelector('#weather-search')
weatherForm.addEventListener("submit", (event) => {
    event.preventDefault()

    //Returns the city entered
    let searchedCity = event.target.elements["city-name"]

    //Get weather data
    let weatherElement = document.querySelector(".weather-container")
    getWeather(searchedCity.value).then(weatherData => {
        //Returns error message if nothing entered
        if(weatherData.message != null) {
            weatherElement.innerHTML = weatherData.message
        } else {
            renderWeather(weatherData, weatherElement)
        }
    })

    //Clears user input after search
    console.log("Fricken clear please")
    event.target.elements["city-name"] = ""
})