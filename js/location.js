let latitude, longitude;

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

export function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    const pos = {"latitude": latitude, "longitude": longitude};
    console.log(pos)
    return pos;
}

export function returnLocation() {
  if (document.readyState !== 'loading') { 
    setTimeout(getLocation, 0); 
  } else { 
    document.addEventListener('DOMContentLoaded', getLocation) 
  }
}
