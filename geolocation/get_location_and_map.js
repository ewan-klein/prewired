var map;

function initialize() {
  var mapOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var marker = new google.maps.Marker({
        map: map,
        position: pos,
      });

      map.setCenter(pos);
    }, error);
  } else {
    // Browser doesn't support Geolocation
    error(0);
  }
}

// What to do if you can't get the location:
function error(err) {
  var problem;
  // Default error is no support.
  problem = "Your browser doesn't support geolocation.";
  
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
  
  document.getElementById('map').innerHTML = "Something went wrong! "+problem;
  
}

google.maps.event.addDomListener(window, 'load', initialize);