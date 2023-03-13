import { cities } from "../data/cities.js";
import { constellations } from "../data/constellations.js";

// Automatically generate the constellation options from data rather than hardcoding
export const returnConstOptions = () => {

    let opts = "";

    for (let item of constellations) {
        opts += `<option class="constellation-dropdown-option" value=${item.abbr}> ${item.commonName}</option>`;
    }

    document.getElementById("constellation").innerHTML = opts;
};

// Automatically generate the city options from data rather than hardcoding
export const returnCityOptions = () => {

    let opts = "";

    for (let item of cities) {
        opts += `<option class="city-dropdown-option" value=${item.city_ascii}> ${item.city_ascii}, ${item.state_name}</option>`;
    }

    document.getElementById("city").innerHTML = opts;
};

// Returns todays date formatted for the API
export function updateDate() {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (mm.toString().length === 1) {
        mm = `0${mm.toString()}`
    }

    if (dd.toString().length === 1) {
        dd = `0${dd.toString()}`
    }

    let date = `${yyyy}-${mm}-${dd}`;
    return date;
}
