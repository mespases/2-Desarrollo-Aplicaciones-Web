var text = document.getElementById("text")
var btn = document.getElementById("btn")
var map = document.getElementById("map")

var mirador = document.getElementById("mirador") //39.531772, 2.364374
var estellenchs = document.getElementById("estellenchs") // 39.653065, 2.481394
var valldemosa = document.getElementById("valldemosa") // 39.711491, 2.622353
var castillo = document.getElementById("castillo") // 39.563647, 2.619968
var acantilados = document.getElementById("acantilados") // 39.378028, 2.775399

mirador.addEventListener('click', function () {  
    latitude = "39.531772"
    longitude = "2.364374"
    text.innerHTML = "Latitud: " + latitude + 
  "<br>Longitud: " + longitude;
    map.src = "https://maps.google.com/maps?q=" + latitude + "," + longitude + "&hl=es&z=10&output=embed"
})

estellenchs.addEventListener('click', function () {  
    latitude = "39.653065"
    longitude = "2.481394"
    text.innerHTML = "Latitud: " + latitude + 
  "<br>Longitud: " + longitude;
    map.src = "https://maps.google.com/maps?q=" + latitude + "," + longitude + "&hl=es&z=10&output=embed"
})

valldemosa.addEventListener('click', function () {  
    latitude = "39.711491"
    longitude = "2.622353"
    text.innerHTML = "Latitud: " + latitude + 
  "<br>Longitud: " + longitude;
    map.src = "https://maps.google.com/maps?q=" + latitude + "," + longitude + "&hl=es&z=10&output=embed"
})

castillo.addEventListener('click', function () {  
    latitude = "39.563647"
    longitude = "2.619968"
    text.innerHTML = "Latitud: " + latitude + 
  "<br>Longitud: " + longitude;
    map.src = "https://maps.google.com/maps?q=" + latitude + "," + longitude + "&hl=es&z=10&output=embed"
})

acantilados.addEventListener('click', function () {  
    latitude = "39.378028"
    longitude = "2.775399"
    text.innerHTML = "Latitud: " + latitude + 
  "<br>Longitud: " + longitude;
    map.src = "https://maps.google.com/maps?q=" + latitude + "," + longitude + "&hl=es&z=10&output=embed"
})



btn.addEventListener('click', function () {  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        
    } else { 
        text.innerHTML = "Geolocation is not supported by this browser.";
    }
})

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            text.innerHTML = "Has rechazado los permisos"
            break;
        case error.POSITION_UNAVAILABLE:
            text.innerHTML = "Información no disponible"
            break;
        case error.TIMEOUT:
            text.innerHTML = "Timed out."
            break;
        case error.UNKNOWN_ERROR:
            text.innerHTML = "Error desconocido"
            break;
    }
  }

function showPosition(position) {
    text.innerHTML = "Latitud: " + position.coords.latitude + 
  "<br>Longitud: " + position.coords.longitude;

  map.src = "https://maps.google.com/maps?q=" + position.coords.latitude + "," + position.coords.longitude + "&hl=es&z=10&output=embed"
}