// js here.
import { getAstronautList } from './api/astronaut.js'
import { renderAstronautListItem } from './dom/astronaut.js'
let astronautList;
let astronautListElement = document.querySelector(".astronaut-list")
getAstronautList().then((data) => {
    astronautList = data;
})
console.log(astronautList)
//renderAstronautListItem(astronautList, astronautListElement);