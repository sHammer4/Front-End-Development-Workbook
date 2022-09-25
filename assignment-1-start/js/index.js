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
    console.log(searchedCity.value)

    //Get weather data
    weatherData = getWeather(searchedCity.value)
    let weatherElement = document.querySelector(".weather-container .text-center")
    
    //Adds weather data card if searched city is found in api, error message if invalid
    if(weatherData == null) {
        weatherElement.innerHTML = "Must enter a valid city name"
    } else {
        renderWeather(searchedCity.value, weatherElement)
    }

    //Clears user input after search 
    searchedCity = ""
})