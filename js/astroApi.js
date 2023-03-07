let dropdown;

// var applicationId = 'd9c326dc-833b-474f-b51a-f157d89954ce';
// var applicationSecret = '8de6ffd9d55939a76d782dc6dfb19998a457ee836f6e89af0f4a21c865f1ee13c00135dba55d5b86ea2e4446a1ddaf844ef611deb0f3b00b813297d02f8e447f37cb745b24cb2939b45c8cbbcc6e98dc53bb380ef8b0800a5c1200d39dda017b15fcdfe7c1fe715cad76da2260947c1c';  

const apiId = "f6db66df-5ad0-4c42-b153-060bc2bd2de0";
const secret = "eaab42a1965d4ae799de1d87a7f98638d8c31a72132eb88cc07e106a73ff48ea622c469f90c7cb5f73b669de2fecdb886e19529dda03b632cd7a5d560e05dd37b6c407bc646e445d71e80b9cbad78360e2a3c7d3aeb47018cbfdf0b26b43c3bbe1cbcef979d6d683b4679bd2d3b9d0e2";
const headers = {'Authorization': `Basic ${btoa(`${apiId}:${secret}`)}`};

const constellations = [
    {"abbr": "and", "greekName": "Andromeda", "commonName": "the Chained Maiden"},
    {"abbr": "leo", "greekName": "Leo", "commonName": "the Lion"},
    {"abbr": "ant", "greekName": "Antlia", "commonName": "the Air Pump"},
    {"abbr": "lmi", "greekName": "Leo Minor", "commonName": "the Lesser Lion"},
    {"abbr": "aps", "greekName": "Apus", "commonName": "the Bird of Paradise"},
    {"abbr": "lep", "greekName": "Lepus" ,"commonName": "the Hare"},
    {"abbr": "aqr", "greekName": "Aquarius", "commonName": "the Water Bearer"},
    {"abbr": "lib", "greekName": "Libra", "commonName": "the Scale"},
    {"abbr": "aql", "greekName": "Aquila", "commonName": "the Eagle"},
    {"abbr": "lup", "greekName": "Lupus", "commonName": "the Wolf"},
    {"abbr": "ara", "greekName": "Ara", "commonName": "the Altar"},
    {"abbr": "lyn", "greekName": "Lynx", "commonName": "the Lynx"},
    {"abbr": "ari", "greekName": "Aries", "commonName": "the Ram"},
    {"abbr": "lyr", "greekName": "Lyra", "commonName": "the Lyre"},
    {"abbr": "aur", "greekName": "Auriga", "commonName": "the Charioteer"},
    {"abbr": "men", "greekName": "Mensa", "commonName": "the Table"},
    {"abbr": "boo", "greekName": "Boötes", "commonName": "the Herdsman"},
    {"abbr": "mic", "greekName": "Microscopium", "commonName": "the Microscope"},
    {"abbr": "cae", "greekName": "Caelum", "commonName": "the Engraving Tool"},
    {"abbr": "mon", "greekName": "Monoceros", "commonName": "the Unicorn"},
    {"abbr": "cam", "greekName": "Camelopardalis", "commonName": "the Giraffe"},
    {"abbr": "mus", "greekName": "Musca", "commonName": "the Fly"},
    {"abbr": "cnc", "greekName": "Cancer", "commonName": "the Crab"},
    {"abbr": "nor", "greekName": "Norma", "commonName": "the Carpenter's Square"},
    {"abbr": "cvn", "greekName": "Canes Venatici", "commonName": "the Hunting Dogs"},
    {"abbr": "oct", "greekName": "Octans", "commonName": "the Octant"},
    {"abbr": "cma", "greekName": "Canis Major", "commonName": "the Great Dog"},
    {"abbr": "oph", "greekName": "Ophiuchus", "commonName": "the Serpent Bearer"},
    {"abbr": "cmi", "greekName": "Canis Minor", "commonName": "the Lesser Dog"},
    {"abbr": "ori", "greekName": "Orion", "commonName": "the Hunter"},
    {"abbr": "cap", "greekName": "Capricornus", "commonName": "the Sea Goat"},
    {"abbr": "pav", "greekName": "Pavo", "commonName": "the Peacock"},
    {"abbr": "car", "greekName": "Carina", "commonName": "the Keel"},
    {"abbr": "peg", "greekName": "Pegasus", "commonName": "the Winged Horse"},
    {"abbr": "cas", "greekName": "Cassiopeia", "commonName": "the Seated Queen"},
    {"abbr": "per", "greekName": "Perseus", "commonName": "the Hero"},
    {"abbr": "cen", "greekName": "Centaurus", "commonName": "the Centaur"},
    {"abbr": "phe", "greekName": "Phoenix", "commonName": "the Phoenix"},
    {"abbr": "cep", "greekName": "Cepheus", "commonName": "the King"},
    {"abbr": "pic", "greekName": "Pictor", "commonName": "the Painter"},
    {"abbr": "cet", "greekName": "Cetus", "commonName": "the Sea Monster"},
    {"abbr": "psc", "greekName": "Pisces", "commonName": "the Fishes"},
    {"abbr": "cha", "greekName": "Chamaeleon", "commonName": "the Chameleon"},
    {"abbr": "psa", "greekName": "Piscis Austrinus", "commonName": "the Southern Fish"},
    {"abbr": "cir", "greekName": "Circinus", "commonName": "the Drafting Compass"},
    {"abbr": "pup", "greekName": "Puppis", "commonName": "the Stern"},
    {"abbr": "col", "greekName": "Columba", "commonName": "the Dove"},
    {"abbr": "pyx", "greekName": "Pyxis", "commonName": "the Magnetic Compass"},
    {"abbr": "com", "greekName": "Coma Berenices", "commonName": "Berenice's Hair"},
    {"abbr": "ret", "greekName": "Reticulum", "commonName": "the Reticle"},
    {"abbr": "cra", "greekName": "Corona Australis", "commonName": "the Southern Crown"},
    {"abbr": "sge", "greekName": "Sagitta", "commonName": "the Arrow"},
    {"abbr": "crb", "greekName": "Corona Borealis", "commonName": "the Northern Crown"},
    {"abbr": "sgr", "greekName": "Sagittarius", "commonName": "the Archer"},
    {"abbr": "crv", "greekName": "Corvus", "commonName": "the Crow"},
    {"abbr": "sco", "greekName": "Scorpius", "commonName": "the Scorpion"},
    {"abbr": "crt", "greekName": "Crater", "commonName": "the Cup"},
    {"abbr": "scl", "greekName": "Sculptor", "commonName": "the Sculptor"},
    {"abbr": "cru", "greekName": "Crux", "commonName": "the Southern Cross"},
    {"abbr": "sct", "greekName": "Scutum", "commonName": "the Shield"},
    {"abbr": "cyg", "greekName": "Cygnus", "commonName": "the Swan"},
    {"abbr": "ser", "greekName": "Serpens", "commonName": "the Serpent"},
    {"abbr": "del", "greekName": "Delphinus", "commonName": "the Dolphin"},
    {"abbr": "dor", "greekName": "Dorado", "commonName": "the Dolphinfish"},
    {"abbr": "sex", "greekName": "Sextans", "commonName": "the Sextant"},
    {"abbr": "dra", "greekName": "Draco", "commonName": "the Dragon"},
    {"abbr": "tau", "greekName": "Taurus", "commonName": "the Bull"},
    {"abbr": "equ", "greekName": "Equuleus", "commonName": "the Little Horse"},
    {"abbr": "tel", "greekName": "Telescopium", "commonName": "the Telescope"},
    {"abbr": "eri", "greekName": "Eridanus", "commonName": "the River"},
    {"abbr": "tri", "greekName": "Triangulum", "commonName": "the Triangle"},
    {"abbr": "for", "greekName": "Fornax", "commonName": "the Furnace"},
    {"abbr": "tra", "greekName": "Triangulum Australe", "commonName": "the Southern Triangle"},
    {"abbr": "gem", "greekName": "Gemini", "commonName": "the Twins"},
    {"abbr": "tuc", "greekName": "Tucana", "commonName": "the Toucan"},
    {"abbr": "gru", "greekName": "Grus", "commonName": "the Crane"},
    {"abbr": "uma", "greekName": "Ursa Major", "commonName": "the Great Bear"},
    {"abbr": "her", "greekName": "Hercules", "commonName": "Hercules"},
    {"abbr": "umi", "greekName": "Ursa Minor", "commonName": "the Lesser Bear"},
    {"abbr": "hor", "greekName": "Horologium", "commonName": "the Clock"},
    {"abbr": "vel", "greekName": "Vela", "commonName": "the Sails"},
    {"abbr": "hya", "greekName": "Hydra", "commonName": "the Water Snake"},
    {"abbr": "vir", "greekName": "Virgo", "commonName": "the Maiden"},
    {"abbr": "hyi", "greekName": "Hydrus", "commonName": "the Male Water Snake"},
    {"abbr": "vol", "greekName": "Volans", "commonName": "the Flying Fish"},
    {"abbr": "ind", "greekName": "Indus", "commonName": "the Indian"},
    {"abbr": "vul", "greekName": "Vulpecula", "commonName": "the Fox"},
    {"abbr": "lac", "greekName": "Lacerta", "commonName": "the Lizard"}
];

// Automatically generate the options from data rather than hardcoding
const returnConstOpions = () => {

    let opts = "";

    for (let item of constellations) {
        opts += `<option class="dropdown-option" value=${item.abbr}> ${item.commonName} (${item.greekName})</option>`;
    }
  
    document.getElementById("constellation").innerHTML = opts;
};

// Event listener for the constellation drop-down
function constellationListener() {
    d3.selectAll(".dropdown-option").on("click", function(d) {
        dropdown = d3.select(this).property("value");
        console.log(dropdown)
    })
}

function fetchBodies() {
    const url = "https://api.astronomyapi.com/api/v2/bodies";;
    fetch(url, {headers}).
    then(response => response.json()).
    then(data => console.log(data));
}

// Star chart API
function fetchStarChart() {
    const url = "https://api.astronomyapi.com/api/v2/studio/star-chart";
    const body = {
            "style": "navy",
            "observer": {
                "latitude": 33.775867,
                "longitude": -84.39733,
                "date": "2019-12-20"
            },
            "view": {
                "type": "constellation",
                "parameters": {
                "constellation": "ori"
            }
        }
    }
    fetch(url, {method: "POST", headers, body: JSON.stringify(body)}).
    then(response => response.json()).
    then(data => console.log(data)).
    then(data => document.getElementById("star-chart").src = data.imageUrl)
    //  then(data => console.log(data));
    // img = document.getElementById("star-chart");
    // img.src = data.;
}

returnConstOpions();
constellationListener();

// fetchStarChart();

