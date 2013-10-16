// What to do when location is got:
function success(position) {
      
  console.log(position);

  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  var alt = position.coords.altitude;
  var acc = position.coords.accuracy;
  var altacc = position.coords.altitudeAccuracy;
  var head = position.coords.heading;
  var speed = position.coords.speed;

  var infos = "<p><strong>Latitude:</strong> " + lat + "</p>";
  infos += "<p><strong>Longitude:</strong> " + lng + "</p>";
  infos += "<p><strong>Altitude:</strong> " + alt + "</p>";
  infos += "<p><strong>Accuracy:</strong> " + acc + "</p>";
  infos += "<p><strong>Altitude accuracy:</strong> " + altacc + "</p>";
  infos += "<p><strong>Heading:</strong> " + head + "</p>";
  infos += "<p><strong>Speed:</strong> " + speed + "</p>";

  document.getElementById('location').innerHTML = infos;
  
}

// What to do if you can't get the location:
function error(err) {
  var problem;
  if (err.code == 1) {
    // user said no!
    problem = "You won't share your location with us."
  }
  if (err.code == 2) {
    // location is unavailable - no satellites in range?
    problem = "Your location is unavailable."
  }
  if (err.code == 3) {
    // request timed out
    problem = "Something was too slow."
  }
  document.getElementById('location').innerHTML = "Something went wrong! "+problem;
  
}

// Try to get the location:
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error("Geolocation not supported... ");
}