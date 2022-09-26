// Include your assignment 1 below.
// Read the PDF for instruction on what to do.
// Ensure that you look at the "Marking Key" section of the PDF
// to not lose any marks.
import { getWeather } from "./api/base";
import { renderWeather } from "./dom/weather";
import 'bootstrap/dist/css/bootstrap.css';

let weatherForm = document.querySelector('#weather-search')
weatherForm.addEventListener("submit", (event) => {
    event.preventDefault()

    //Returns the city entered
    let searchedCity = event.target.elements["city-name"]

    //Get weather data
    let weatherElement = document.querySelector(".weather-container")
    getWeather(searchedCity.value).then(weatherData => {
        if(weatherData.message != null) {
            //Displays error message
            weatherElement.innerHTML = weatherData.cod + ": " + weatherData.message
            weatherElement.classList.add("text-center")
        } else {
            //Displays weather data
            renderWeather(weatherData, weatherElement)
            weatherElement.classList.remove("text-center")
        }
    })

    //Clears user input after search
    event.target.elements["city-name"].value = ""
})