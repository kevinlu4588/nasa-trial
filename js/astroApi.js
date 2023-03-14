import * as Telescope from "./telescope.js";
import { updateDate} from "./helper.js";
import { cities } from "../data/cities.js";
import { constellations } from "../data/constellations.js";
import * as Location from "./location.js";
// GLOBALS -------------------------------------------------------------------------------

// var applicationId = 'd9c326dc-833b-474f-b51a-f157d89954ce';
// var applicationSecret = '8de6ffd9d55939a76d782dc6dfb19998a457ee836f6e89af0f4a21c865f1ee13c00135dba55d5b86ea2e4446a1ddaf844ef611deb0f3b00b813297d02f8e447f37cb745b24cb2939b45c8cbbcc6e98dc53bb380ef8b0800a5c1200d39dda017b15fcdfe7c1fe715cad76da2260947c1c';  

const apiId = "f6db66df-5ad0-4c42-b153-060bc2bd2de0";
const secret = "eaab42a1965d4ae799de1d87a7f98638d8c31a72132eb88cc07e106a73ff48ea622c469f90c7cb5f73b669de2fecdb886e19529dda03b632cd7a5d560e05dd37b6c407bc646e445d71e80b9cbad78360e2a3c7d3aeb47018cbfdf0b26b43c3bbe1cbcef979d6d683b4679bd2d3b9d0e2";
const headers = {'Authorization': `Basic ${btoa(`${apiId}:${secret}`)}`};
const url = "https://api.astronomyapi.com/api/v2/studio/star-chart";

let view = {
    "type": "constellation",
    "parameters": {
        "constellation": constellations[0].abbr
    }
}
Location.returnLocation();

//console.log("latitude" + latitude);
let observer = {
    "latitude": 33.775867,
    "longitude": -84.39733,
    "date": updateDate()
}


d3.select("#constellation-name").text(`${constellations[0].commonName.toLowerCase()} (${constellations[0].greekName.toLowerCase()})`)

// selecting loading div
const loader = document.querySelector("#loading");
const teleCanvas = document.querySelector("#telescope canvas");

// DISPATCH -------------------------------------------------------------------------------
const dispatch = d3.dispatch("constellation-change", "city-change");

// dispatch event handlers
dispatch.on("constellation-change", () => {
    fetchStarChart();
});

dispatch.on("city-change", () => {
    fetchStarChart();
});

// FUNCTIONS -------------------------------------------------------------------------------


// Event listener for the constellation drop-down
export function constellationListener() {
    d3.selectAll("#constellation").on("click", function(d) {
        view = {
            "type": "constellation",
            "parameters": {
                "constellation": d3.select(this).property("value")
            }
        }

        dispatch.call("constellation-change");
    })
}

// Event listener for the constellation drop-down
export function cityListener() {
    d3.selectAll("#city").on("click", function(d) {

        let city = cities.find(d => d.city_ascii === d3.select(this).property("value"));

        observer.latitude = city.lat;
        observer.longitude = city.lng;

        dispatch.call("city-change");
    })
}

// showing loading
function displayLoading() {
    loader.classList.add("display");
    teleCanvas.classList.add("reduce-opacity");
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
    teleCanvas.classList.remove("reduce-opacity");

}


// Star chart API
export function fetchStarChart() {
    const body = {
            "style": "navy",
            "observer": observer,
            "view": view
    }

    displayLoading();

    fetch(url, {method: "POST", headers, body: JSON.stringify(body)}).
    then(response => response.json()).
    then(function(data) { 
        hideLoading()
        Telescope.draw("https://cors.office.dataculturegroup.org/" + data.data.imageUrl);
    });
}
