// https://ipgeolocation.abstractapi.com/v1/?api_key=f8c1e7effe5747349417b09fa0afe091


// Star chart API
function fetchIP() {
    const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=f8c1e7effe5747349417b09fa0afe091";
    fetch(url, {method: "GET"}).
    then(response => response.json()).
    then(data => d3.select("#location").text(`${data.city.toLowerCase()}, ${data.region.toLowerCase()}`));
}

fetchIP();