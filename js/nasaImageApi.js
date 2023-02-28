$.ajax({
    url:"https://api.nasa.gov/planetary/apod?api_key=jVQ018aAXegqAo7CE1WxklvjiHlpcswlQoHB3piO",
    success:function(returnJSON) {
       img = document.getElementById("photo-of-the-day");
       console.log(returnJSON);
       img.src = returnJSON.url;
       }
});