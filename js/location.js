if (document.readyState !== 'loading') { 
	setTimeout(onReady, 0); 
} else { 
	document.addEventListener('DOMContentLoaded', onReady) 
} 
 
function onReady() { 
   getLocation();
} 

var x = document.getElementById("demo");
    function getLocation() {
        console.log("getting location");
      if (navigator.geolocation) {
        console.log("has geo");
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerText = "Geolocation is not supported by this browser.";
      }
    }
    
    function showPosition(position) {
        console.log(x);
        var x = document.getElementById("demo");
        console.log(position.coords.latitude);
        console.log("showing geo");
        x.innerText = "Latitude: " + position.coords.latitude + "\n"+
        "Longitude: " + position.coords.longitude;
    }
