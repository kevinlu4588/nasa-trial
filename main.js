import * as Astro from "./js/astroApi.js";
import * as Telescope from "./js/telescope.js";

Astro.returnConstOpions();
Astro.constellationListener();
Astro.fetchStarChart();

Telescope.draw();
