let latitude, longitude;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    const pos = {"latitude": latitude, "longitude": longitude};
    console.log(pos)
    return pos;
}

function returnLocation() {
  if (document.readyState !== 'loading') { 
    setTimeout(getLocation, 0); 
  } else { 
    document.addEventListener('DOMContentLoaded', getLocation) 
  }
}

returnLocation();
