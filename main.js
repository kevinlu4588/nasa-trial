import * as Astro from "./js/astroApi.js";
import * as Telescope from "./js/telescope.js";
import * as Helper from "./js/helper.js";

Helper.returnConstOptions();
Helper.returnCityOptions();

Telescope.draw();

Astro.constellationListener();
Astro.fetchStarChart();
