var x = document.getElementById("demo");
let latitude, longitude;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerText = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
    var x = document.getElementById("demo");
    x.innerText = "Latitude: " + position.coords.latitude + "\n"+
    "Longitude: " + position.coords.longitude;
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

function returnLocation() {
  if (document.readyState !== 'loading') { 
    setTimeout(getLocation, 0); 
  } else { 
    document.addEventListener('DOMContentLoaded', getLocation) 
  }
  return {"latitude": latitude, "longitude": longitude}
}

returnLocation();