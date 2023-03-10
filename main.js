import * as Astro from "./js/astroApi.js";
import * as Telescope from "./js/telescope.js";

Telescope.draw();

Astro.returnConstOpions();
Astro.constellationListener();
Astro.fetchStarChart();

