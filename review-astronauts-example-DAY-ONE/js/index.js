// js here.
import 'bootstrap/dist/css/bootstrap.min.css';

import { getAstronautList } from './api/astronaut';
import { renderAstronautListItem } from './dom/astronaut';

let list = getAstronautList().then(astronautData => {
    let astronautListElement = document.querySelector(".astronaut-list")
    console.log(astronautData.results)
    astronautData.results.map((data) => {
        renderAstronautListItem(data, astronautListElement)
    })
})