// js here.
import { getAstronautList } from './api/astronaut.js'
import { renderAstronautListItem } from './dom/astronaut.js'

let astronautListElement = document.querySelector(".astronaut-list")

getAstronautList().then((data) => {
    console.log(data)
    data.results.map((astronautData) => {
        renderAstronautListItem(astronautData, astronautListElement)
    })
})
