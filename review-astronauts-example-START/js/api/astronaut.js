const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

// api functions here.
const getAstronautList = () => {
    fetch(BASE_URL + "/astronaut/")
        .then((response) => {
            return response.json()
        })
        .then((data) => { 
            console.log("Data")
            return data.results
        })
}

export { getAstronautList }